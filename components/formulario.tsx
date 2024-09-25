"use client"

const Formulario = () => {

    const onSubmit = () => {
        alert("Formulario enviado");
    }

    return (
        <div className="max-w-md mx-auto p-8 bg-gray-800 rounded-md shadow-md form-container">
    <h2 className="text-2xl font-semibold text-white mb-6">Contactame...!!!</h2>
    <form>
        <div className="mb-4">
        <label className="block text-gray-300 text-sm font-bold mb-2">Tú Nombre</label>
        <input type="text" id="name" name="name" placeholder="Como te llamas?" required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white" />
        </div>
        <div className="mb-4">
        <label className="block text-gray-300 text-sm font-bold mb-2">Tú Correo</label>
        <input type="email" id="email" name="email" placeholder="john@example.com" required
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white" />
        </div>
        <div className="mb-4">
        <label className="block text-gray-300 text-sm font-bold mb-2">Tú Numero</label>
        <input type="tel" id="tel" name="tel" placeholder="555 123 1234" required
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white" />
        </div>
        <div className="mb-6">
        <label className="block text-gray-300 text-sm font-bold mb-2">Platicame sobre tu proyecto</label>
        <textarea id="message" name="message" placeholder="Que tipo de servicio buscas?" required
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"></textarea>
        </div>
        <div className="mb-6 py-2">
        <button type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
        Contactar
        </button>
        </div>
        <div className="mb-6 py-6">
            <p className="block text-gray-300 text-sm font-bold mb-2 py-4">Gracias por contactarme espero pronto estar en <a className="text-blue-600 py-6" href="#">contacto</a></p>
        </div>
    </form>
</div>
    );
}

export default Formulario;