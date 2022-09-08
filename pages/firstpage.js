

export default function firstpage() {
    return(
        
    
    
    <div className='h-screen flex bg-gray-bg1'>


    <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
        <h1 className='text-3xl font-medium text-primary mt-4 mb-12 text-center'>
          Bienvenue
        </h1>
        <h1 className='text-xs  font-medium text-primary mt-3 mb-12 text-center'>
          -administrateur-
        </h1>

        <form >
            <div>
                <label className='text-xs '>Adress email</label>
                <input
                    type='email'
                    className={`w-full p-2 text-primary border rounded-xl outline-none text-sm transition duration-150 ease-in-out mb-4`}
                    id='email'
                    placeholder='Your Email'
                />
            </div>
            

            <div className='flex justify-center items-center mt-6'>
                <button className={`bg-black py-2 px-4 text-sm text-white rounded-full border border-green focus:outline-none focus:border-green-dark`}
               
                >
                    se connecter
                </button>
                
        
            </div>
            <div className='flex justify-center items-center mt-6'>
                <button className={`bg-white py-2 px-4 text-sm text-black rounded-full border border-green focus:outline-none focus:border-green-dark`}
               
                >
                    Annuler
                </button> </div>
        </form>
    </div>
</div>
  )}