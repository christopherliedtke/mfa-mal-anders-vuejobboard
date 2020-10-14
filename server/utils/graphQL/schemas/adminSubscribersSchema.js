const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLNonNull,
    GraphQLList,
} = require("graphql");
const SubscriberType = require("../types/SubscriberType");
const { Subscriber } = require("../../models/subscriber");

// #Root Query
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        subscriber: {
            type: SubscriberType,
            args: { _id: { type: new GraphQLNonNull(GraphQLString) } },
            async resolve(parentValue, args) {
                const subscriber = await Subscriber.findOne({
                    _id: args._id,
                });
                return subscriber;
            },
        },
        subscribers: {
            type: new GraphQLList(SubscriberType),
            async resolve(parentValue, args) {
                const subscribers = await Subscriber.find().sort({
                    createdAt: "desc",
                });
                return subscribers;
            },
        },
    },
});

// #Mutations
const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        deleteSubscriber: {
            type: SubscriberType,
            args: {
                _id: { type: new GraphQLNonNull(GraphQLString) },
            },
            async resolve(parentValue, args) {
                const deleted = await Subscriber.deleteOne({
                    _id: args._id,
                });

                if (!deleted) {
                    return { status: "not deleted" };
                } else {
                    return { status: "deleted" };
                }
            },
        },
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation,
});
