import React from 'react'
import { createContext } from 'react'
// import { food_list } from '../new_images/assets'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{
  const [address,setaddress] = useState({})
    const [token,setToken] = useState("")
    const [cartitems,setcartitems] = useState(JSON.parse(localStorage.getItem("cartitems")) || {})
    const [userId, setUserId] = useState(localStorage.getItem('userId') || '');
    const[food_list,setfood_list] = useState([])
    const[fav,setfav]  = useState([])
      
  const url = `http://localhost:4300`
  
        
    const addtoCart = async (ind) => {
      if (!cartitems[ind]) {
        setcartitems((prev) => ({ ...prev, [ind]: 1 }));
      } else {
        setcartitems((prev) => ({ ...prev, [ind]: prev[ind] + 1 }));
      }
      console.log("Token: ", token);
    
      if (token) {
        try {
          console.log("Sending payload: ", { ind });
    
          const response = await axios.post(url + "/api/cart/add", { itemid: ind }, { headers: { Authorization: token } });
          console.log("Add to cart response: ", response.data);
        } catch (error) {
          console.error("Error adding to cart: ", error.response ? error.response.data : error.message);
        }
      } else {
        console.error("No token available");
      }
    };
        const removefromCart = (ind)=>{
          if(cartitems[ind]>0){
          setcartitems((prev)=>({...prev,[ind]:prev[ind]-1}))
          }
        }    
     
        const getTotalAmount = () => {
          let total = 0;
          try {
              for (let item in cartitems) {
                  if (cartitems[item] > 0) {
                      let amountinfo = food_list.find((product) => product._id === item);
                      if (amountinfo) {
                          total += amountinfo.price * cartitems[item] * 80;
                      } else {
                          console.warn(`Item with ID ${item} not found in food_list.`);
                      }
                  }
              }
          } catch (error) {
              console.error("Error in getTotalAmount:", error);
          }
          const formattedTotalPrice = total.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 });
          return formattedTotalPrice;
      };
      
      const favorite = (ind) => {
        setfav((prevFav) => {
          // Add new favorite to the array
          const newItem = cartitems[ind];
          // Check if the item is already in the array
          if (prevFav.includes(newItem)) {
            return prevFav; // Item already in favorites
          }
          return [...prevFav, newItem]; // Add new item to favorites
        });
      };
 





      const getplainAmount = () => {
        let total = 0;
        try {
            for (let item in cartitems) {
                if (cartitems[item] > 0) {
                    let amountinfo = food_list.find((product) => product._id === item);
                    if (amountinfo) {
                        total += amountinfo.price * cartitems[item] * 80;
                    } else {
                        console.warn(`Item with ID ${item} not found in food_list.`);
                    }
                }
            }
        } catch (error) {
            console.error("Error in getTotalAmount:", error);
        }
        return parseFloat(total).toFixed(2); // Return the plain float number
    };



    const clearCartItems = () => {
      setcartitems({});
      localStorage.removeItem('cartitems');
    };

   
  
    // Function to handle logout
    const handleLogout = () => {
      setToken('');
      setUserId('');
      clearCartItems(); // Clear cart items on logout
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
    
    };


    // const handleLogin = (token, userId) => {
    //   setToken(token);
    //   setUserId(userId);
    //   // Fetch or restore cart items for the user from backend or localStorage
    //   const storedCartItems = JSON.parse(localStorage.getItem('cartitems')) || {};
    //   setcartitems(storedCartItems);
    // };

    const storedCartItems = JSON.parse(localStorage.getItem('cartitems')) || {};

        const fetchFoodList = async() => {
const response = await axios.get(`${url}/api/food/list`)
setfood_list(response.data.data)
        }


       useEffect(() => {
          localStorage.setItem("favourites", JSON.stringify(fav));
      }, [fav]);

      useEffect(() => {
        localStorage.setItem("token", token);
    }, [token]);

    useEffect(() => {
        localStorage.setItem("cartitems", JSON.stringify(cartitems));
    }, [cartitems]);

    useEffect(() => {
      async function loadData(){
        await fetchFoodList();
    if( localStorage.getItem("token")){
      setToken(localStorage.getItem("token"))
    }else{
      console.log("no token found in localstorage")
    }
  }
  loadData()
  }, []);


   const contextValue = {
food_list,
cartitems,
setcartitems,
addtoCart,
removefromCart,
getTotalAmount,
token,
setToken,
getplainAmount,
url,
userId,
setUserId,
address,
setaddress,
handleLogout,
storedCartItems,
favorite,
fav
    }
    return (
        <StoreContext.Provider value = {contextValue}>
{props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider