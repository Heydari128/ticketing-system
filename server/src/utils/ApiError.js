class ApiError extends Error {
  constructor(statusCode, message, isOperational = true, stack = '') {
    if (statusCode === 200 && !message) message = 'عملیات با موفقیت انجام شد.';
    else if (statusCode === 400 && !message) message = 'خطا در پردازش اطلاعات ارسال شده.';
    else if (statusCode === 401 && !message) message = 'جهت ادامه فرآیند مجددا وارد سیستم شوید.';
    else if (statusCode === 403) message = 'شما مجوز لازم جهت انجام این اقدام را ندارید.';
    else if (statusCode === 500 && !message) message = 'خطا در سرور! مجددا در زمان دیگری تلاش نمایید.';
    else if (statusCode === 404 && !message) message = 'درخواست مورد نظر یافت نشد.';
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

module.exports = ApiError;
