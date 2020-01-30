
const notFoundRoutes = ((req, res, next) => {
    console.log('error');

    next({
        error: 'not found',
        status: 404
    });
});
export default notFoundRoutes;
