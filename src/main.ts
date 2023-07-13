import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as bodyParser from "body-parser";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    bodyParser.urlencoded({
      limit: "5mb",
      extended: false,
    })
  );
  app.use(bodyParser.json({ limit: "5mb" }));
  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    })
  );

  const config = new DocumentBuilder()
    .setTitle("Boxes API Documentation")
    .setDescription("Boxes API description")
    .setVersion("1.0")
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("swagger", app, document);
  await app.listen(3000);
  console.log("Server Start [port: 3000]");
}
bootstrap();
