var logger;

logger = require('./index').Logger;

logger.debug("This is a debug message");

logger.info("This is an info message");

logger.error("This is an error message");

logger.warn("This is a warn message");

logger.bot("This is a bot message");

logger.shell("This is a shell message");

logger.exec("This is an exec message");

logger.stub("This is a stub message");

logger.todo("This is a todo message");

logger.sql("This is a sql message");
