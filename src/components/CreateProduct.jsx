import { useEffect, useState } from "react";
import { api } from "../api/api";
import useInput from "../hooks/useInput";




function CreateProduct() {
const [categories, setCategories] = useState([]);
const  { attr: titleProps, onClear: titleClear } = useInput("");
const  { attr: descriptionProps, onClear: desClear } = useInput("");
const  { attr: categoryProps, onClear: categoryClear } = useInput("");
const  { attr: imageProps, onClear: imageClear } = useInput("");
const  {  attr: priceProps, onClear: priceClear } = useInput("");
const  { attr: rattingProps, onClear: rattingClear } = useInput("");

        const handleSubmit = () => {
            const fromData =  {
                "id": crypto.randomUUID(),
                "title": titleProps.value,
                "image": imageProps.value,
                "description": descriptionProps.value,
                "price": priceProps.value,
                "ratting": rattingProps.value,
                "category": categoryProps.value,
            }
            
            api.post('/products', fromData)
            

             titleClear();
             desClear();
             categoryClear();
             imageClear();
             priceClear();
             rattingClear();
    
        };

        useEffect(() => {
            async function getCategory() {
                try {
                    const conn = await api.get('/categories')
                        setCategories(conn.data);
                } catch (error) {
                    console.log(error);
                    
                }
            }

            getCategory();
        }, []);
    



    return (
        <div className="col-span-9 bg-white p-3">
            <h2 className="text-3xl font-bold mb-3">Create Product</h2>

            <div className="mb-3">
                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your title
                </label>
                <input
                    // value={value}
                    // onChange={onChange}
                    // type={type}

                    {...titleProps}
                    type="text"
                    id="title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Select an option
                </label>
                <select
                    id="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...categoryProps}
                >
                    {categories.map(category => <option key={category.id}>{category.title}</option>)}
                  
                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your message
                </label>
                <textarea
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your thoughts here..."
                    {...descriptionProps}
                ></textarea>
            </div>

            <div className="mb-3">
                <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your image
                </label>
                <input
                    type="text"
                    id="image"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    {...imageProps}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your price
                </label>
                <input
                    type="number"
                    id="price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    {...priceProps}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="ratting" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your rating
                </label>
                <input
                    type="number"
                    id="ratting"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    {...rattingProps}
                />
            </div>

            <div className="mb-3">
                <button
                    onClick={handleSubmit}
                    type="button"
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                    Save Post
                </button>
            </div>
        </div>
    );
}

export default CreateProduct;
