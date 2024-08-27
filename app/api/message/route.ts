const nodemailer = require('nodemailer');
require('dotenv').config(); 

type RequestBody = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
};

export const POST = async (req: Request) => {
    try {
        const body = await req.text();
        const data: RequestBody = JSON.parse(body);

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.email,
                pass: process.env.pass,
            },
        });

        const userMailOptions = {
            from: process.env.email,
            to: data.email,
            subject: 'Recibimos tu solicitud',
            html: `
                <div style="font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #f9f9f9; padding: 20px; text-align: center;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="50" viewBox="0 0 200 50">
                        <text x="10" y="35" fill="#556B2F" font-family="Arial, sans-serif" font-size="24" font-weight="bold">
                            Code as Services
                        </text>
                    </svg>
                    <h1>¡Gracias por contactarnos, ${data.firstName}!</h1>
                    <p>Hemos recibido tu solicitud y nos pondremos en contacto contigo pronto.</p>
                </div>
            `,
        };

        const notificationMailOptions = {
            from: process.env.email,
            to: process.env.email,
            subject: 'Nueva solicitud recibida',
            html: `
                <div style="font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #f4f4f4; padding: 20px; color: #333;">
                    <h2 style="color: #556B2F;">Nueva solicitud recibida</h2>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                        <tr>
                            <th style="text-align: left; padding: 8px; background-color: #556B2F; color: #fff;">Campo</th>
                            <th style="text-align: left; padding: 8px; background-color: #556B2F; color: #fff;">Detalle</th>
                        </tr>
                        <tr style="background-color: #f9f9f9;">
                            <td style="padding: 8px;">Nombre:</td>
                            <td style="padding: 8px;">${data.firstName} ${data.lastName}</td>
                        </tr>
                        <tr style="background-color: #e9e9e9;">
                            <td style="padding: 8px;">Correo:</td>
                            <td style="padding: 8px;">${data.email}</td>
                        </tr>
                        <tr style="background-color: #f9f9f9;">
                            <td style="padding: 8px;">Teléfono:</td>
                            <td style="padding: 8px;">${data.phone}</td>
                        </tr>
                        <tr style="background-color: #e9e9e9;">
                            <td style="padding: 8px;">Mensaje:</td>
                            <td style="padding: 8px;">${data.message}</td>
                        </tr>
                    </table>
                </div>
            `,
        };

        await transporter.sendMail(userMailOptions);
        await transporter.sendMail(notificationMailOptions);

        return new Response(JSON.stringify({ message: 'Emails sent successfully' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ message: 'Failed to send email', error }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
};
