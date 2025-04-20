# NestJS Google Trends Integration

A package for integrating Google Trends API into your NestJS applications.

## Usage 

After installing, you can use the package in your NestJS application. Here’s how to integrate it:
Import the Service in your Module:

import { GoogleTrendsService } from 'nestjs-google-trends';
@Module({
  providers: [GoogleTrendsService],
})
export class YourModule {}

Inject and Use the Service:

import { Injectable } from '@nestjs/common';
import { GoogleTrendsService } from 'nestjs-google-trends';
@Injectable()
export class YourService {
  constructor(private readonly googleTrendsService: GoogleTrendsService) {}
  async getTrends() {
    const trends = await this.googleTrendsService.getTrends('your-keyword');
    console.log(trends);
  }
}
Calling the API
Use the methods available in the service to interact with the Google Trends API and retrieve the data.

## Configuration

You might need to set up your API keys or configure any necessary parameters depending on the API's requirements. Check the documentation of the Google Trends API for specific configuration options.

## License

This project is licensed under the MIT License.

## Support & Reporting Issues

If you encounter any bugs or have feature requests, feel free to:

Open an issue on [GitHub](https://github.com/ahmadmohammadi80/nestjs-google-trends/issues)

Or contact us directly via email:

📧 info@ahmadmohammadi.com

We appreciate your feedback and contributions! 💙

## Installation

You can install the package via npm:

```bash
npm install nestjs-google-trends










