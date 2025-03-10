import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private isCalled = false;
  getHello(): string {
    setInterval(async () => {
      await this.getData();
    }, 600000);
    return 'Hello anh anh 1412!';
  }
  async getData(): Promise<any> {
    const url = 'https://n8n-syag.onrender.com/';
  
    try {
      this.isCalled = true;
      const response = await fetch(url);
  
      if (!response.ok) {
        console.log(`False ${new Date().toISOString()}`);
        return '';
      }
      console.log(`Success ${new Date().toISOString()}`);
      return ''; // Chỉ parse nếu là JSON
    } catch (error) {
      console.error(`Err ${new Date().toISOString()}`, error);
      this.isCalled = false;
      return '';
    }
  }
  checkCalled(): boolean {
    return this.isCalled;
  }
   
}
