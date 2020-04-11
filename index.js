let express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs' );

app.get('/get',(req, res)=>{
    res.render('main')
})

app.post('/post', (req, res) => {
    const {name,date} = req.body;
    
    data.push({name,date});
    res.redirect('/get')
})


app.listen(3000);


let Number = {data: 0}
let data = [
   {name:'Mo dom dom', date: '1988'},
   {name:'Hang xom toi la totoro', date: '1998'},
   {name:'Walle', date: '2007'},
   {name:'Coco', date: '2018'},
   {name:'5cm/s', date: '2007'},
   {name:'Your name', date: '2017'},
   {name:'Momo', date: '2011'},
   {name:'Vung dat linh hon', date: '2001'},
   {name:'Lau dai di dong cua Howl', date: '2004'},
   {name:'Only Yesterday', date: '1991'},
   {name:'Porco Rosso', date: '1992'},
   {name:'Co be nguoi ca Ponyo', date: '2000'},
   {name:'The Girl Who Leapt Through Time', date: '2006'},
   {name:'Kikis Delivery Service', date: '1989'},
   {name:'Cong chua Mononoke', date: '1997'},
   {name:'Thung lung gio', date: '1984'},
   {name:'Yamada', date: '1999'},
   {name:'Laputa', date: '1986'},
   {name:'Nang tien ong tre', date: '2013'},
   {name:'Wolf Children', date: '2012'},
   {name:'Noi gio', date: '2013'},
   {name:'Ocean Waves', date: '1993'},
]