const hbs = require('nodemailer-express-handlebars')
const nodemailer = require('nodemailer')
const path = require('path')

const {
    
    FEV_MEMBER_LIST

} = require('./data')
    // initialize nodemailer

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    pool: true,
    auth: {
        user: 'fpteventclub@gmail.com',
        pass: 'jrayvcmspzdpmwua'        //<================ Replace this place
    }
});

// point to the template folder
const handlebarOptions = {
    viewEngine: {
        partialsDir: path.resolve('./views/'),
        defaultLayout: false,
    },
    viewPath: path.resolve('./views/'),
};

// use a template file with nodemailer
transporter.use('compile', hbs(handlebarOptions));
var count = 0,
    remain = FEV_MEMBER_LIST.length;
FEV_MEMBER_LIST.forEach(async(member) => {
    var mailOptions = {
        from: '"FPT Event Club (FEV)" fpteventclub@gmail.com', // sender address
        to: member.email, // list of receivers
        subject: "[FEV] - TEAMBUILDING SINH NHẬT LẦN 11 - PURPLE PUZZLE",            //<================ Replace this place
        template: 'email', // the name of the template file i.e email.handlebars
        context: {
            gender: member.gender.trim(),
            name: member.name.trim(),
        }
    };
    // trigger the sending of the E-mail
    await transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            return console.log(error);
        }
        count++
        remain--
        console.log('Message sent: ' + member.name + ' : ' + count + ":" + remain);
    })
})