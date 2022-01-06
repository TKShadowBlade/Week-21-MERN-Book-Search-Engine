const { User, Book } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const revolvers = {
    Query: {
        me: async (parent, args, context) => {
            if(context.user) {
                const userData = await User.findOne({})
                .select('-__V -password')
                .populate('books')
                return userData;
            }
            throw new AuthenticationError('User not logged in')
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return {token, user};
        },
        
        login: async (parent, {email, password}) => {
            const user = await User.findOne({email});

            if(!user) {
            throw new AuthenticationError('Credentials not valid');    
            }
            
            const token = signToken(user);
            return {token, user};
        },

        saveBook: async (parent, args, context) => {
            if(context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    {_id: context.user._id},
                    { $addToSet: { savedBooks: args.input } },
                    { new: true }
                );
                return updatedUser;
            }
            throw new new AuthenticationError('Must be logged in');
        },
        removeBook: async (parent, { bookId }, context) => {
            if (context.user) {
                const updatedUser = await user.findOneAndUpdate(
                    {_id: context.user._id},
                    { $pull: { savedBooks: { bookId: bookId } } },
                    { new: true }
                )
                return updatedUser;
            }
        }

    }
};

module.exports = resolvers;