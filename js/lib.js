const productList = [
    { id: "01", name: "Hạt giống hoa hồng Pháp", price: 230, image:"../assets/images/rose1.jpg", productLink: "product-detail.html"},
    { id: "02", name: "Hoa hướng dương", price: 210, image:"../assets/images/sunflower.jpg", productLink: "product-detail.html"},
    { id: "03", name: "Hoa tulip", price: 240, image:"../assets/images/tulip.jpg", productLink: "product-detail.html"},
    { id: "04", name: "Hoa cẩm tú cầu", price: 250, image:"../assets/images/camtu.jpg", productLink: "product-detail.html"},
    { id: "06", name: "Hạt giống hoa hồng Pháp", price: 250, image:"../assets/images/rose1.jpg", productLink: "product-detail.html"},
    { id: "07", name: "Hạt giống hoa hồng Pháp", price: 210, image:"../assets/images/rose1.jpg", productLink: "product-detail.html"},
    { id: "08", name: "Hạt giống hoa hồng Pháp", price: 250, image:"../assets/images/rose1.jpg", productLink: "product-detail.html"},
    { id: "09", name: "Hạt giống hoa hồng Pháp", price: 250, image:"../assets/images/rose1.jpg", productLink: "product-detail.html"},
    { id: "10", name: "Hạt giống hoa hồng Pháp", price: 250, image:"../assets/images/rose1.jpg", productLink: "product-detail.html"}
];

function addProduct(id, name, price, image, hyperLink)
{
    //Tạo thẻ div khung chứa 1 sản phẩm  - product item
            const productItem = document.createElement("div");

            //Thêm thuộc tinh cho thẻ div
            productItem.setAttribute("class", "product-item");

            //Tạo khung số 1 - chứa ảnh - product image
            const productImage = document.createElement("div");

            //Thêm thuộc tinh cho thẻ div
            productImage.setAttribute("class", "product-image h-75");

            //Thêm ảnh vào khung chứa
            const myImage = document.createElement("img");
            myImage.setAttribute("src", image);
            myImage.setAttribute("alt", name);
            myImage.setAttribute("class", "img-fluid h-100 object-fit-cover");
           // myImage.style.height="250px";
            //myImage.style.width="250px";

            //Gắn hình vào khung chứa product image
            productImage.appendChild(myImage);


            //Tạo khung số 2 - chứa thông tin sản phẩm - product info
            const productInfo = document.createElement("div");

            //Thêm thuộc tinh cho thẻ div
            productInfo.setAttribute("class", "product-info text-center h-25");

            //Thêm đối tượng p, a cho khung chứa product info
            const productName = document.createElement("p");
            const productNameText = document.createTextNode(name);
            productName.appendChild(productNameText);

            //gắn vào khung chứa
            productInfo.appendChild(productName);

            //Thêm đối tượng p, a cho khung chứa product info
            const productPrice = document.createElement("p");
            const productPriceText = document.createTextNode(price+"/túi");
            productPrice.setAttribute("class","text-danger fw-bold");
            productPrice.appendChild(productPriceText);

            //gắn vào khung chứa
             productInfo.appendChild(productPrice);


            const productLink = document.createElement("a");
            const productLinkText = document.createTextNode("Xem chi tiết");
            productLink.setAttribute("href",hyperLink+"?id="+id);
            productLink.appendChild(productLinkText);
            productLink.setAttribute("class", "btn btn-info");

            //Gắn link cho product Info
            productInfo.appendChild(productLink);

            //Gắn 2 khung chứa image và info vào product item
            productItem.appendChild(productImage);
            productItem.appendChild(productInfo);

            //Gắn product item vào product list
            document.getElementById("product-list").appendChild(productItem);
}