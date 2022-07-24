let array=[1,7,8,9,15,20];
let check =false;
index=-1;
for (i=0; i<array.length; i++){
      if( array[i]==15){
        check=true;
        index=i;
        break;
    }
    if(check==true){
        alert("15 có trong mảng ở vị trí: " + i);
        break;
    }
    else {
        alert("15 không có trong mảng");
        break;
    }
}
