import { useState, useEffect,useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

function Home() {
    
    const {getAllUsers, allUsers}= useContext(AuthContext) 
    const [items, setitems] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false); 


    const handleSubmit = async (e) => {
        
        try {
            await getAllUsers();            
            setIsSuccess(true);
            
        }
        catch (error) {
            console.error('Error en el registro:', error);
          }          
    };

    useEffect(() => {
        if (isSuccess) {
            setitems(JSON.parse(allUsers))                
        }
    },[isSuccess,allUsers]);

  return (
    <>
      <div className="bg-gray-200 font-sans leading-normal tracking-normal">
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Andrés Fernando García Perea</h1>
              <h2 className="text-2xl font-bold mb-6">Software Developer SSr</h2>
            </div>
          </div>
        </section>

        <section className="bg-gray-200 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Encontraras</h2>
              <p className="text-gray-600 mb-12">
                Mi propuesta de desarrollo para esta prueba técnica. Como se ha solicitado todas las comunicaciones con la bd se hacen a través de apiRest.
              </p>
            </div>
            <div className="flex flex-wrap -mx-4 mt-12">
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="rounded-md bg-white shadow-md p-8">
                  <div className="text-4xl font-bold text-purple-600 mb-4">
                    Puesta en marcha
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Feature 1</h3>
                  <p className="text-gray-600 mb-4">
                    En la parte superior derecha en el navbar, puedes encontrar el inicio de sesión o el SingUp, en caso de que no te hayas registrado.
                    <br></br>
                    En la parte inferior derecha veras el resultado de la consulta por proceso almacenado.
                  </p>
                </div>
              </div>
              
              <div className="w-full md:w-2/3 px-4 mb-8">
                <div className="rounded-md bg-white shadow-md p-8">
                  <div className="flex items-center justify-between">
                    <div className="text-4xl font-bold text-purple-600 mb-4">
                      Store Procedure
                    </div>
                    <button
                      type="submit"
                      className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
                      onClick={handleSubmit}
                    >
                      Data Users
                    </button>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Tabla de datos registrados</h3>
                  <table className="w-full text-sm text-left rtl:text-right text-gray-600 dark:text-gray-600">
                    <thead>
                      <tr>
                        <th>UserName</th>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Email</th>                        
                      </tr>
                    </thead>
                    <tbody>
                      {items?.map((user) => (
                        <tr key={user.username}>
                          <td>{user.username}</td>
                          <td>{user.firstname}</td>
                          <td>{user.lastname}</td>
                          <td>{user.email}</td>                          
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
