
// Yêu cầu khi làm các bài tập về  hàm
//     - Định nghĩa tên hàm
//     - Định nghĩa đầu vào của hàm
//     - Định nghĩa đầu ra của hàm 




//     2. Sử dụng các hàm ở 1 để tính tổng, hiệu của n1,n2

//     3. Viết hàm tính để nhân 2 số 
//     4. Sử dụng hàm (3) để xuất ra màn hình tính của 2 số n1, n2
//     5. Viết hàm chia 2 số
//     6. Sử dụng hàm (4) để tính n1/n2. Nếu n2 = 0 thì sẽ ra sao 
//     7. Sử dụng hàm (4) để tính n2/n1. nếu n1 bằng 0 thì sẽ ra sao 
//     8. Viết hàm tính bình phương một số nhập vào 
//     9. Sử dụng hàm (8) để xuất ra màn hình bình phương của n1 và bình phương của n2
//     10. Viết hàm tìm số lớn hơn trong 2 số
//     11. Sử dụng hàm (10) để tìm ra số nào lớn hơn trong 2 số n1, n2
//     12. Viết hàm tìm số nhỏ hơn trong 2 số 
//     13. Sử dụng hàm (12) để tìm ra số nào nhỏ hơn trong 2 số n1, n2
//     14. Viết hàm tính giá trị trung bình của 2 số 
//     15. Sử dụng hàm (14) để tính giá trị trung bình của n1, n2
//     16. Viết hàm tính phần dư khi 2 số chia với nhau 
//     17. Sử dụng hàm (16) để xuất ra màn hình sốdư khi n1 chia cho n2
//     18. Sử dụng hàm (16) để xuất ra màn hình số dư khi n2 chia cho n1
//     19. Viết hàm kiểu ra một số có chia hết cho số còn lại không
//     20. Sử dụng hàm (19) để kiểm tra xem n1 có chia hết cho n2 không. Nếu n1 chia hết cho n2 thì xuất ra màn hình câu “n1 chia hết cho n2” nếu không thì xuất ra màn hình câu “n1 không chia hết cho n2”
//     21. Sử dụng hàm (19) để kiểm tra xem n2 có chia hết cho n1 không. Nếu n2 chia hết cho n1 thì xuất ra màn hình câu “n2 chia hết cho n1” nếu không thì xuất ra màn hình câu “n2 không chia hết cho n1”
//     22. Viết hàm tính chu vi hình chữ nhật
//     23. Viết hàm tính diện tích hình chữ nhật  
//     24. Sử dụng hàm (22) (23) để tính chu vi và diện tích một hình chữ nhật trong đó 2 cạnh có độ dài lần luợt là n1 và n2
//     25. Viết hàm tính chu vi hình tròn
//     26. Viết hàm tính diện tích hình tròn
//     27. Sử dụng hàm (25) (26) để tính chu vi và diện tích một hình tròn có bán kính là n1
//     28. Sử dụng hàm (25) (26) để tính chu vi và diện tích một hình tròn có bán kính là n2

// Chuỗi
// Tạo ra 5 biến s1, s2, s3, s4, s5 chứa 5 chuỗi 
//     1. Viết hàm nối 2 chuỗi . Ví dụ có 2 chuỗi S1, S2 mục tiêu sẽ trả ra một chuỗi gộp của S1 và S2 là S = S1 + S2
//     2. Dưa vào hàm nối 2 chuỗi ở 1. Xuất ra màn hình một chuỗi S là gộp của 5 chuỗi S1, S2, S3, S4, S5 
//     3. Viết hàm in hoa chuỗi truyền vào. 
//     4. Dựa vào hàm in hoa đã làm ở 3. Xuất ra màn hình in hoa của 5 chuỗi S1, S2, S3, S4, S5 và S = S1S2S3S4S5 
//     5. Viết hàm kiểm tra chuỗi này có tồn tại trong chuỗi kia hay không.
//     6. Sử dụng hàm 5 để kiểm tra S2 có tồn tại trong S1 không 
//     7. sử dụng hàm [s.length] để xuất ra độ dài các chuỗi s1-s5 và độ sài của chuỗi S1S2S3S4S5
//     8. Sử dụng hàm có sẵn [string.substring(begin,end)] để cắt ra một chuỗi con của S1,S2,S3,S4,S5 từ vị trí số 1 tới vị trí số 3
//     9. sử dụng hàm có sẵn [string.includes(s)] để xem S1, S2, S3, S4 có tồn tại trong S5 không. Nếu S1 có tồn tịa thì xuất ra màn hình câu "S1 có tồn tại trong S5" nếu không thì xuất ra câu "S1 không tồn tại trong S5". Tương tự đối với S2, S3, S4



// ================= GỢI Ý ĐẶT TÊN HÀM =============

// Xuất ra màn hình 
// 1. showLog(message): void


// Số học 
// 1. tong(a,b): number
//    hieu(a,b): number
//     1. Viết hàm Tính tổng; hiệu 2 số  và trả ra kết quả.
var a = 1;var b = 2;
var tong = a +b;
var hieu = a -b;
console.log("hiệu của a và b là : "+hieu )
console.log("tổng của a và b là : "+tong )

// 3. tich(a,b): number
var tich = a * b;
console.log("tích của a và b là : "+tich )
// 5. chia(a,b): 
var chia = a/b;
console.log("chia của a và b là : "+chia)
// 8. binhPhuong(a): number
var binhPhuong = a* a;
console.log("bình phương của a và b là : "+tich )

// 10. max(a,b): number
let max = Math.max(a,b)
console.log("max là :"+max)
// 12. min(a,b): number
let min = Math.min(a,b)
console.log("min là :"+min)
// 14. trungBinh(a,b): number
let trungBinh = (a+b)/2
console.log("trungBinh là :"+trungBinh)
// 16. chiaLayDu(a,b): number
let chiaLayDu = a%b;
console.log("chiaLayDu của a và b là :" +chiaLayDu)
// 19. coChiaHet(a,b): boolean
let coChiaHet = a/b;
console.log("chia hết :"+ coChiaHet)
// 22. chuViChuNhat(a,b): number
let chuViChuNhat = (a+ b)*2;
console.log("chu vi chu nhat :"+ chuViChuNhat)
// 23. dienTichChuNhat(a,b): number
var dienTichChuNhat = a * b;
console.log("diện tích hình chữ nhật là :"+dienTichChuNhat +"m2")
// 25. chuViHinhTrong(r): number
var pi =3.14;
var r =10;
let chuViHinhTron = r * 2 * pi;
console.log("chu vi hình tròn là :" + chuViHinhTron)

// 26. dienTichHinhTron(r): number
let dienTichHinhTron = r * r * pi;
console.log("diện tích hình tròn là :" + dienTichHinhTron)

// Chuỗi
// 1. noiChuoi(s1, s2): string
var s1 = "vu";
var s2 = " dai";
var noiChuoi = s1 +s2;
console.log("chuỗi nối là :" +noiChuoi)
// 3. inHoa(s1): string
var inHoa = s1.toUpperCase();
console.log("chuỗi đã đổi :"+ inHoa)
// 6. coTonTai(s1, s2): boolean
// ////////////////////////vòng lặp///////////////////////////////////////
// 1. Viết hàm xuất ra một tin nhắn, n lần
//     - showMessage(message, n)
function showMessage(message,n){
    for (let i =0 ; i<n ;i++){
        console.log(message)
    }
}
showMessage("dai pro",10)
// 2. Sử dung hàm (1) xuất ra 10 lần dòng chữ "Hôm nay trời đẹp quá"
showMessage("Hôm nay trời đẹp quá",10)

// 3. Viết hàm tính tổng từ 1 tới n 
function tinhtong(n){
    tong= 0;
    for(let i =1;i<=n;){
       tong = tong + i;
       i++
    }
    console.log("tổng tư 1-n là :"+tong)
}
tinhtong(3);
// 4. Sử dụng hàm (3) tính toán tổng từ 1 tới 100; tính toán tổng từ 1 tới 500

// 5. Viết hàm tính tổng từ a tới b
// function tongtongab(a,b){
//     tong = 0;
//     for(let i = a;i <=b;){
//         tong = tong + i;
//     }
//     console.log("tổng a tới b là :" + tong)
// } 
// tongtongab(5,7);

// 6. Sử dụng hàm (5) tính toán tổng từ 1 tới 100; tính toán tổng từ 20 tới 76

// 7. Viết hàm tính tổng tất cả các số lẻ từ a tới b 

// 8. Sử dụng hàm (7) tính toán tổng từ 1 tới 100; tính toán tổng từ 20 tới 76

// 9. Viết hàm xuất ra n số lẻ nhỏ nhất 

// 10. Sử dụng hàm (9) xuất ra 100 số lẻ gần nhất 

// 11. Viết hàm xuất ra n số lẻ gần nhất bắt đầu từ m. Ví dụ: viết ra 3 số lẻ gần nhất bắt đầu từ 102 => 103; 105; 107
// 12. Sử dụng hàm (11) xuất ra 57 số lẻ gần nhất bắt đầu từ 1005

// 13. Viết hàm kiểm tra một số có phải là số nguyên tố hay không? Biết số nguyên tố là số chia hết cho một và chính nó.
// 14. Viết hàm xuất ra n số nguyên tố nhỏ nhất. 
// 15. Sử dụng hàm (14) xuất ra 20 số nguyên tố nhỏ nhất.
// 16. Viết hàm xuất ra n số nguyên tố nhỏ nhất băts đầu từ m
// 17. Sử dụng hàm (16) xuất ra 20 số nguyên tô nhỏ nhất bắt đầu từ 1000


// ============== GỢI Ý ĐẶT TÊN HÀM ============
// 1. showMessage(message, amount): void
// 3. sum(amount): number
// 5. sum(from, to): number
// 7. sumOdd(from, to): number
//     - sum là tổng  
//     - odd là số lẻ 
// 9. listOdd(amount): []
// 11. listOdd(from, amount): number[]
// 13. isPrime(n): boolean
// 14. listPrime(amount): number[]
// 16. listPrime(from, amount): number[]
// ////////////////////////////////////////////////////////mảng ////////////////////////////////
// Mảng để lưu trữ danh sách các giá trị. Giá trị đó có thể là number, string, date.....
// Ví dụ: 
// Mảng lưu trữ các giá trị số từ 1 tới 3
// [1,2,3]
var mang1 =[1,2,3]

// Mảng lưu trữ các sở thích cá nhân 
// ["đá bóng", "bóng chuyền"]
var mang2 =  ["đá bóng", "bóng chuyền"]

// Bài tập
// 1. Tạo một mảng chứa các số từ 1 tới 10
// 2. Tạo một mảng lưu trữ sở thích cá nhân 
// 3. Xuất mảng (1) ra console.log
console.log(mang1);
// 4. Xuất mảng (2) ra console.
console.log(mang2);

// 5. thêm giá trị "cầu lông", "bơi lội" vào mảng sở thích 
let mangmoi2 = mang2.push("cầu lông", "bơi lội");
console.log("mảng mới đã thêm là :"+mangmoi2)
// 6. Cập nhật giá trị "bóng chuyền" trong mảng thành "Bóng Chuyền"
var phantudasua = mang2[1]="Bóng Chuyền";
console.log("phần tử đã sửa:" + phantudasua)
// 7. Xoá 2 phần tử tại vị trí số 1 và 2 ra khỏi mảng 
var mangdaxoa = mang2.slice(1,2);
console.log("phẩn tử đã xóa là :" + mangdaxoa)
// 8. Viết hàm trả ra danh sách tất cả số nhỏ hơn n
//     - getLessThan(n): number[]
//     - Ví dụ getLessThan(3) sẽ trả ra mảng [0,1,2]
function getLessThan(n) {
    for (var i = 0; i < n; i++) {
        console.log(i);
    }
}
getLessThan(3);
// 9. Sử dụng hàm (8) xuất ra console danh sách các số nhỏ hơn 100 

// 10. Viết hàm trả ra danh sách tất cả các số lẻ nhỏ hơn n
//     - getOddlessThan(n): number[]
function getOddlessThan(n) {
    for (var i = 0; i < n; i++) {
        if(i%2==1){
            console.log(i);
        }  
    }
}
getOddlessThan(5);
// 11. Sử dụng hàm (9) xuất ra console danh sách toàn bộ số lẻ <1000


// 12. Viết hàm trả ra danh sách in hoa tất cả các phần tử trong mảng. Đầu vào là một mang, đầu ra là mông mảng khác và tất cả các phần tử được in hoa  
//     - toUpperCase(arr) : string[]
var doi =toUpperCase(mangmoi2);
console.log("mảng đã viết hoa :"+doi)

// 13. Sử dụng hàm (12) để in hoa mảng sở thích cá nhân 

// 14. Viết hàm tìm ra vị trí phần tử đầu tiên nằm trong mảng 
//     - findFirst(arr, chuoiCanTim): number
// 15. Sử dụng hàm (9). 
//     - Mảng: ["bóng chuyền", "bóng rổ", "bóng đá"]    
//     - string cần tìm: bóng rổ
//     - kết quả trả ra: vị trí 2

// 16. Viết hàm tìm ra vị trí phần tử cuối cùng nằm trong mảng 
//     - findLast(arr, chuoiCanTim): number
// 17. Sử dụng hàm (16). 
//     - Mảng: ["bóng chuyền", "bóng rổ", "bóng đá"]    
//     - string cần tìm: bóng rổ
//     - kết quả trả ra: vị trí 2


// 18. Viết hàm tìm ra vị trí tất cả phần tử nằm trong mảng 
//     - find(arr, chuoiCanTim): numer[]
// 19. Sử dụng hàm (19). 
//     - Mảng: ["bóng chuyền", "bóng rổ", "bóng đá", "bóng rổ"]    
//     - string cần tìm: bóng rổ
//     - kết quả trả ra: vị trí [2,4]

// 20. Viết hàm thêm một phần tử vào mảng 
//     - add(arr, chuoiCanThem): []
// 21. Sử dụng hàm (20). 
//     - Mảng: ["bóng chuyền", "bóng rổ", "bóng đá"]    
//     - string cần thêm: bóng rổ
//     - kết quả trả ra: ["bóng chuyền", "bóng rổ", "bóng đá", "bóng rổ"]

// 22. Viết hàm thêm một phần tử vào mảng, nhưng nếu phần tử đó đã tồn tại thì ko thêm nữa.
//     addIfNotExist(arr,chuoiCanThem):[]
// 23. Sử dụng hàm (22). 
//     - Mảng: ["bóng chuyền", "bóng rổ", "bóng đá"]    
//     - string cần thêm: bóng rổ
//     - kết quả trả ra: ["bóng chuyền", "bóng rổ", "bóng đá"]

// 24. Viết hàm xoá toàn bộ phần tử ra khỏi mảng 
//     - delete(arr,chuoiCanXoa): []
// 25. Sử dụng hàm (24). 
//     - Mảng: ["bóng chuyền", "bóng rổ", "bóng đá","bóng chuyền"]    
//     - string cần thêm: bóng chuyền
//     - kết quả trả ra: ["bóng rổ", "bóng đá"]
