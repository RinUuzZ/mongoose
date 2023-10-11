
const mongoose = require('mongoose');
main().catch(err=>console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/work');

    console.log('connocted');

    const nameschema = new mongoose.Schema({
        name:String
    });

    const Name = mongoose.model('name' , nameschema);

    const a1 = new Name({name:"Aju"});
    a1.save();

    const a2= new Name({name:"Jimmy"});
    a2.save();

    const a3 = new Name({name:"Jack"});
    a3.save();

    console.log('saved');
}
main().catch(err=>console.log(err));