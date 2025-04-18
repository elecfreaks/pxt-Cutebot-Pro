#include "pxt.h"

//% color=50 weight=80
//% icon="\uf1eb"
namespace IRV2 { 
int ir_code = 0x00;
int ir_addr = 0x00;
int data;

int logic_value(){//判断逻辑值"0"和"1"子函数
    uint32_t lasttime = system_timer_current_time_us();
    uint32_t nowtime;
    while(!uBit.io.P16.getDigitalValue());//低等待
    nowtime = system_timer_current_time_us();
    if((nowtime - lasttime) > 350 && (nowtime - lasttime) < 850){//低电平560us
        while(uBit.io.P16.getDigitalValue());//是高就等待
        lasttime = system_timer_current_time_us();
        if((lasttime - nowtime)>350 && (lasttime - nowtime) < 850){//接着高电平560us
            return 0;
        }else if((lasttime - nowtime)>1350 && (lasttime - nowtime) < 1950){//接着高电平1.7ms
            return 1;
       }
    }
    return -1;
}

void pulse_deal(){
    int i;
    int num;
    ir_addr=0x00;//清零
    for(i=0; i<16;i++ )
    {
        num = logic_value();
        if(num == 1)
        {
            ir_addr |=(1<<i);
        }else if (num == -1) {
            ir_addr = 0;
            break;
        }
    }
    //解析遥控器编码中的command指令
    ir_code=0x00;//清零
    for(i=0; i<16;i++ )
    {
        num = logic_value();
        if(num == 1)
        {
            ir_code |=(1<<i);
        }
        else if (num == -1) 
        {
            ir_code = 0; 
            break;
        }
    }

}

void remote_decode(void){
    data = 0x00;
    uint32_t lasttime = system_timer_current_time_us();
    uint32_t nowtime;
    while(uBit.io.P16.getDigitalValue()){//高电平等待
        nowtime = system_timer_current_time_us();
        if((nowtime - lasttime) > 100000){//超过100 ms,表明此时没有按键按下
            ir_code = 0xffff;
            return;
        }
    }
    //如果高电平持续时间不超过100ms
    lasttime = system_timer_current_time_us();
    while(!uBit.io.P16.getDigitalValue());//低等待
    nowtime = system_timer_current_time_us();
    if((nowtime - lasttime) < 10000 && (nowtime - lasttime) > 5000){//9ms
        while(uBit.io.P16.getDigitalValue());//高等待
        lasttime = system_timer_current_time_us();
        if((lasttime - nowtime) > 4000 && (lasttime - nowtime) < 5000){//4.5ms,接收到了红外协议头且是新发送的数据。开始解析逻辑0和1
            pulse_deal();
            //uBit.serial.printf("addr=0x%X,code = 0x%X\r\n",ir_addr,ir_code);
            data = ir_code;
            return;//ir_code;
        }else if((lasttime - nowtime) > 2000 && (lasttime - nowtime) < 2500){//2.25ms,表示发的跟上一个包一致
            while(!uBit.io.P16.getDigitalValue());//低等待
            nowtime = system_timer_current_time_us();
            if((nowtime - lasttime) > 500 && (nowtime - lasttime) < 700){//560us
                //uBit.serial.printf("addr=0x%X,code = 0x%X\r\n",ir_addr,ir_code);
                data = ir_code;
                return;//ir_code;
            }
        }
    }
}

 //% 
int irCode(){
    remote_decode();
    return data;
}

//%
int readPulseIn(int status){
  uint32_t lasttime,nowtime,temp;
  if(status == 1){//HIGH
        lasttime = system_timer_current_time_us();
	while(!uBit.io.P2.getDigitalValue()){ 
           temp = system_timer_current_time_us();
           if((temp - lasttime) > 70000){
	     //uBit.serial.printf("time out 0 %d\r\n",(temp-lasttime));
	     return -1;
           }
        }
        lasttime = system_timer_current_time_us();
	while(uBit.io.P2.getDigitalValue()){
           if((system_timer_current_time_us() - lasttime) > 70000){
	     //uBit.serial.printf("time out 1");
	     return -1;
           }
        }
        nowtime = system_timer_current_time_us();
	
  }else{//LOW
	while(uBit.io.P2.getDigitalValue()){
           if((system_timer_current_time_us() - lasttime) > 70000){
	     //uBit.serial.printf("time out 3");
	     return -1;
           }
        }
	lasttime = system_timer_current_time_us();
	while(!uBit.io.P2.getDigitalValue()){
           if((system_timer_current_time_us() - lasttime) > 70000){
	     //uBit.serial.printf("time out 4");
	     return -1;
           }
	}
	nowtime = system_timer_current_time_us();
  }
  return (nowtime - lasttime);
}

}