 const carResolver = require('./car');
 const personResolver = require('./person');
 const accountResolver = require('./account');
 const saleResolver = require('./sale');
 const userResolver = require('./user');
// const eventsResolver = require('./events');
// const bookingResolver = require('./booking');
//
// const rootResolver = {
//     ...authResolver,
//     ...eventsResolver,
//     ...bookingResolver
// };


const rootResolver={
    ...carResolver,
    ...personResolver,
    ...accountResolver,
    ...saleResolver,
    ...userResolver
};
module.exports = rootResolver;
