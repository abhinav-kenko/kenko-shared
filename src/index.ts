if (process && process.env && process.env.NODE_ENV && ["prod"].includes(process.env.NODE_ENV)) {
  console.log("starting APM-SERVER communication also... ");

  const apm = require('elastic-apm-node').start({
    serviceName: 'kenko-backend',
    secretToken: 'hfJB29Fs9d33mDWC25',
    serverUrl: 'https://d2e12e6cd56a454eb89648f0beb79632.apm.ap-south-1.aws.elastic-cloud.com:443',
    environment: process.env.NODE_ENV,
    asyncHooks: false
  })

} else {
  const env = (process && process.env && process.env.NODE_ENV) ? process.env.NODE_ENV : "";
  console.log(`skipping APM-SERVER communication ... as env=[${env}]`);
}



import { Client } from "elasticsearch";
export const ElasticSearchClient = new Client({
  host: "https://my-deployment-2f3b5b.es.ap-south-1.aws.elastic-cloud.com:9243",
  httpAuth: "abhinav.dubey:Kenko@2021"
});


import { $log } from "@tsed/common";
import { PlatformExpress } from "@tsed/platform-express";
import { Server } from "./Server";
import "./init/queue.module"; //to initialize





async function bootstrap() {
  try {
    $log.info("Starting server...");
    const platform = await PlatformExpress.bootstrap(Server);

    await platform.listen();

    //queue
    // const queueService = platform.injector.get<QueueService>(QueueService)


    // Gracefully shut down, close connections to Database
    // Add any other processes that must be shut down here before process is closed
    process.on("SIGINT", async () => {
      $log.info("SIGINT signal received.");
      await platform.stop();
      process.exit(0);
    });


    $log.info("Server initialized");
  } catch (er) {
    $log.error(`error while starting backend service ...`);
    $log.error(er);
    process.exit(1)
  }
}

bootstrap();

