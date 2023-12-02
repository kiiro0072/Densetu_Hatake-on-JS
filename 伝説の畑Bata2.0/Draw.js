var imgList = ["./image/Items/にんじん.png","./image/Items/じゃがいも.png","./image/Items/鍬.png","./image/Items/かぶ.png"]
class Draw{
      static Draw(context,nuber,price){
        context.fillStyle = '#999'
        context.fillRect(0,10,1420,660)
        context.fillStyle = '#555'
        context.fillRect(0,50,1400,700)
        for (let i = 0; i < 4; i++) {
          var img = new Image()
          img.src = imgList[i]
            console.log(nuber)
            context.fillStyle = "#333"
            context.fillRect(i*200+40,70,148,148)
            if(nuber == i){
              context.fillStyle = "#3F3"
              context.fillRect(i*200+40,70,148,148)
              console.log(nuber)
            }
            context.drawImage(img,i*200+50,80,128,128)
            context.fillStyle = '#333';
            context.fillText(price[i]+"G", i*200+50,205);
            
        }
      }
}

class envent{
  static NEWDrawEnvent(Name,Int){
    var Item_name = Name
    var Item_Int = Int
      context.fillStyle = "#555"
      context.fillRect(0,580,10000,150)
      for (let i = 0; i < Item_name.length; i++) {
        var image = new Image()
        context.fillStyle = "#999"
        if(i == Itemnumber){
        context.fillStyle = "#FF0"
        context.fillRect(i*140+SlotCamera-10,600,100,100)
        }else{
          context.fillRect(i*140+SlotCamera-10,600,100,100)
        }
        switch (Item_name[i]) {
            case 'g':
                image.src = "./image/Items/じゃがいも.png"
                break;
            case 'a':
                  image.src = "./image/Items/にんじん.png"
                  break;
            case 'h':
                    image.src = "./image/Items/鍬.png"
                    break;
                    /*case 'k':
                    image.src = "./image/Items/かぶ.png"
                    break;*/
            default:
              image.src = "./image/Items/空.png"
                break;
        }
        context.drawImage(image,i*140-0+SlotCamera,610,80,80)
        context.font = "30px italic bold";
        context.fillStyle = "#333"
        //context.fillText(Item_Int[i], i*140+SlotCamera, 690);
        
        if(Item_name[i] == 'h'){
          let x = Item_Int[i]+9;
          context.fillText(Math.floor(x/10), i*140+SlotCamera, 690);
        }else{
          context.fillText(Item_Int[i], i*140+SlotCamera, 690);
        }
      }
    }
  }