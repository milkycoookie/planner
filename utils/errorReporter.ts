import * as Sentry from "sentry-expo";

import { IS_DEV, SENTRY_DSN } from "../consts";

const init = () => {
  Sentry.init({
    dsn: SENTRY_DSN,
    enabled: !IS_DEV,
  });
};

const send = (error: any, tags?: Record<string, any>, extras?: Record<string, any>) => {
  Sentry.Native.withScope((scope) => {
    if (!!tags) scope.setTags(tags);
    if (!!extras) scope.setExtras(extras);
    Sentry.Native.captureException(error);
    console.error(error);
  });
};

const ErrorReporter = {
  init,
  withScope: Sentry.Native.withScope,
  send,
};
export default ErrorReporter;
