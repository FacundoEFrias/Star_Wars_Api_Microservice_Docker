module.exports = function catchAsync(fn) {
    return (req, res, next) => {
        fn(req, res).catch((err) => {
        next(err);
      });
    };
  };