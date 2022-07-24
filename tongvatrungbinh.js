let array= [];
let num = + prompt(" nhập số vào ");
let sum=0;
for (i=0; i<num; i++){
    let value = + prompt(" nhập vào phần tử:  " );
    array.push(value)
}
    let number=array
    document.getElementById("demo").innerHTML= "kết quả: " + number;
    for(i=0; i<array.length; i++) {
        sum += array[i]
    }
    document.write("tổng: " + sum + "<br>");

    for(i=0; i<array.length; i++) {
    trungbinh= sum/array.length
    }
    document.write("điểm trung bình: " + trungbinh.toFixed(3))
