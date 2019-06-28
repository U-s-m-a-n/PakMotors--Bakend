const jsreport = require('jsreport-core')(options = {
    tasks: {strategy: 'in-process'},
    assets: {
        // wildcard pattern for accessible linked or external files
        allowedFiles: "static/**.css",
        // enables access to files not stored as linked assets in jsreport store
        searchOnDiskIfNotFoundInStore: true,
        // root url used when embedding assets as links {#asset foo.js @encoding=link}
        rootUrlForLinks: __dirname + "../",
        // make all assets accessible to anonymous requests
        publicAccessEnabled: true
    },
    phantom: {
        allowLocalFilesAccess: true
    },
    logger: {
        console: {transport: "console", "level": "debug"}
    },
    autoTempCleanup: false
});
const fs = require('fs');

// jsreport.use(require('jsreport-assets')({}));



const {Sale} = require('../models/sale');
const {Person} = require('../models/person');
const {Car} = require('../models/car');
// const {Account} = require('../models/account');
// const {User} = require('../models/user');


const express = require("express");
const router = express();


// router.get("/:id/salesPDF", async (req, res) =>{
//     try{
//         const sales = await Sale.findById(req.params.id);
//         const buyer = await Person.findById(sales.buyer_id.toString());
//         const seller = await Person.findById(sales.seller_id.toString());
//         const witness1 = await Person.findById(sales.witness1.toString());
//         const witness2 = await Person.findById(sales.witness2.toString());
//         const car = await Car.findById(sales.car_id.toString());
//         const data = [sales,buyer,seller,car,witness1,witness2];
//
//
//         jsreport.init().then(() => {
//             jsreport.render({
//                 template: {
//                     content:
//                         '<h3>buyerName:  {{buyerName}}</h3>' +
//                         '<h3>buyerFatherName:  {{buyerFatherName}}</h3>' +
//                         '<h3>buyerCast:  {{buyerCast}}</h3>' +
//                         '<h3>buyerCnic:  {{buyerCnic}}</h3>' +
//                         '<h3>buyerAddress:  {{buyerAddress}}</h3>'+
//                         '<h3>--------------------------------------------------</h3>'+
//                         '<h3>sellerName:  {{sellerName}}</h3>' +
//                         '<h3>sellerFatherName:  {{sellerFatherName}}</h3>' +
//                         '<h3>sellerCast:  {{sellerCast}}</h3>' +
//                         '<h3>sellerCnic:  {{sellerCnic}}</h3>' +
//                         '<h3>sellerAddress:  {{sellerAddress}}</h3>'+
//                         '<h3>--------------------------------------------------</h3>'+
//                         '<h3>vehicleName:  {{vehicleName}}</h3>' +
//                         '<h3>horsePower:  {{horsePower}}</h3>' +
//                         '<h3>color:  {{color}}</h3>' +
//                         '<h3>kota:  {{kota}}</h3>' +
//                         '<h3>model:  {{model}}</h3>'+
//                         '<h3>chasis:  {{chasis}}</h3>' +
//                         '<h3>engine:  {{engine}}</h3>' +
//                         '<h3>registration:  {{registration}}</h3>' +
//                         '<h3>isSold:  {{isSold}}</h3>' +
//                         '<h3>--------------------------------------------------</h3>'+
//                         '<h3>Witness_1_Name:  {{Witness_1_Name}}</h3>' +
//                         '<h3>Witness_1_FatherName:  {{Witness_1_FatherName}}</h3>' +
//                         '<h3>Witness_1_Cast:  {{Witness_1_Cast}}</h3>' +
//                         '<h3>Witness_1_Cnic:  {{Witness_1_Cnic}}</h3>' +
//                         '<h3>Witness_1_Address:  {{Witness_1_Address}}</h3>'+
//                         '<h3>--------------------------------------------------</h3>'+
//                         '<h3>Witness_2_Name:  {{Witness_2_Name}}</h3>' +
//                         '<h3>Witness_2_FatherName:  {{Witness_2_FatherName}}</h3>' +
//                         '<h3>Witness_2_Cast:  {{Witness_2_Cast}}</h3>' +
//                         '<h3>Witness_2_Cnic:  {{Witness_2_Cnic}}</h3>' +
//                         '<h3>Witness_2_Address:  {{Witness_2_Address}}</h3>'+
//                         '<h3>--------------------------------------------------</h3>'+
//                         '<h3>toalAmount:  {{toalAmount}}</h3>'+
//                          '<h3>date:  {{date}}</h3>'
//                     ,
//                     engine: 'handlebars',
//                     recipe: 'chrome-pdf'
//                 },
//                 data: {
//                     buyerName: `${data[1].name}`,
//                     buyerFatherName: `${data[1].f_name}`,
//                     buyerCast: `${data[1].cast}`,
//                     buyerCnic: `${data[1].cnic}`,
//                     buyerAddress: `${data[1].address}`,
// //---------------------------------------------------------------------------------------------------------//
//
//                     sellerName: `${data[2].name}`,
//                     sellerFatherName: `${data[2].f_name}`,
//                     sellerCast: `${data[2].cast}`,
//                     sellerCnic: `${data[2].cnic}`,
//                     sellerAddress: `${data[2].address}`,
// //----------------------------------------------------------------------------------------------------------//
//                     vehicleName: `${data[3].v_name}`,
//                     horsePower: `${data[3].horse_power}`,
//                     color: `${data[3].color}`,
//                     kota: `${data[3].kota}`,
//                     model: `${data[3].model}`,
//                     chasis: `${data[3].chasis}`,
//                     engine: `${data[3].engine}`,
//                     registration: `${data[3].registration}`,
//                     isSold: `${data[3].isSold}`,
// //----------------------------------------------------------------------------------------------------------//
//
//                     Witness_1_Name: `${data[4].name}`,
//                     Witness_1_FatherName: `${data[4].f_name}`,
//                     Witness_1_Cast: `${data[4].cast}`,
//                     Witness_1_Cnic: `${data[4].cnic}`,
//                     Witness_1_Address: `${data[4].address}`,
// //----------------------------------------------------------------------------------------------------------//
//
//                     Witness_2_Name: `${data[5].name}`,
//                     Witness_2_FatherName: `${data[5].f_name}`,
//                     Witness_2_Cast: `${data[5].cast}`,
//                     Witness_2_Cnic: `${data[5].cnic}`,
//                     Witness_2_Address: `${data[5].address}`,
// //----------------------------------------------------------------------------------------------------------//
//                     toalAmount: `${data[0].paymentDetails[0].totalAmount}`,
//                     date: `${data[0].date}`
//                 }
//             }).then((resp) => {
//                 // write report buffer to a file
//                 fs.writeFileSync('saleReport.pdf', resp.content);
//             });
//         }).catch((e) => {
//             console.log(e)
//         });
//
//         jsreport.close()
//
//         res.send(data);
//     }
// catch (err) {
//     console.log(err)
//     }
// });

router.get("/:id/delivery-order", async (req, res) =>{
    try {
        // const sales = await Sale.findById(req.params.id);
        // const buyer = await Person.findById(sales.buyer_id.toString());
        // const car = await Car.findById(sales.car_id.toString());
        // const data = [sales, buyer, car];


        jsreport.init().then(() => {
            jsreport.render({
                template: {
                    content: fs.readFileSync(__dirname + "/../documents/salesLetter.html") + "",
                    engine: 'handlebars',
                    recipe: 'chrome-pdf'
                },
                data: {
                    // customer: {
                    //     name: buyer.name,
                    //     father_name: buyer.f_name,
                    //     address: buyer.address,
                    //     city: buyer.address,
                    //     cnic: buyer.cnic,
                    //     telephone: buyer.mobile[0]
                    // },
                    //
                    // vehicle: {
                    //     name: car.v_name,
                    //     model: car.model,
                    //     color: car.color,
                    //     engine: car.engine,
                    //     chasis: car.chasis
                    // }
                }
            }).then((resp) => {
                // write report buffer to a file
                // fs.writeFile('saleReport.pdf', resp.content, () => {});
                resp.stream.pipe(res);
                // res.end()
            });
        }).catch((e) => {
            console.log(e)
        });

        jsreport.close();
        // res.send(data);
    }
    catch (err) {
        console.log(err)
    }
});

//
// router.get("/:id", async (req, res)=>{
//     const sale = await Sale.findById(req.params.id);
//
//     if(!sale){
//         return res.status(404).send("The sale with this id is not found")
//     }
//
//     res.send(sale);
// });




module.exports = router;