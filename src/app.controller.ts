import { Controller, Post, Body, Render, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()  // A gyökér URL megjeleníti az index.ejs fájlt
  @Render('index') 
  getRoot() {
    return {}; 
  }

  @Post('payment') // A POST metódus, amely fogadja az űrlapadatokat
  @Render('payment')
  handlePayment(@Body() body: { name: string; accountNumber: string }) {
    return {
      name: body.name || 'Név nem elérhető',
      accountNumber: body.accountNumber || 'Bankszámlaszám nem elérhető',
    };
  }
}
