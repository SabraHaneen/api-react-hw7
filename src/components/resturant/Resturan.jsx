


import React, { useEffect, useState } from 'react'

export default function Resturan() {
    let [mypizza,setPizza]=useState([]);
    const getPizza= async()=>{
        let response=await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
        let data= await response.json();
        setPizza(data.recipes);

    }
    let [mysalad,setSalad]=useState([]);
    const getSalad= async()=>{
        let response=await fetch("https://forkify-api.herokuapp.com/api/search?q=salad");
        let data= await response.json();
        setSalad(data.recipes);

    }
    let [myonion,setOnion]=useState([]);
    const getOnion= async()=>{
        let response=await fetch("https://forkify-api.herokuapp.com/api/search?q=onion");
        let data= await response.json();
        setOnion(data.recipes);

    }
    useEffect(()=>{
        getPizza()
        getSalad()
        getOnion()
    },[])
  return (
    <div className='auto-container overflow-hidden'>
<section className='pizza py-5'>
<h1 className='text-black text-center bg-danger my-5'>PIZZA</h1>

    <div className='row bg-danger'>
        {mypizza.map((ele)=>{
            return <div className='col-md-4' key={ele.recipe_id}>
                <h2>{ele.title}</h2>
                <img src={ele.image_url} className='w-100'></img>

            </div>
        })}
        
        </div>
        </section>
        <section className='salad py-5'>
            <h1 className='text-black text-center bg-info my-5'>SALAD</h1>
    <div className='row bg-info'>
        {mysalad.map((ele)=>{
            return <div className='col-md-4' key={ele.recipe_id}>
                <h2>{ele.title}</h2>
                <img src={ele.image_url} className='w-100'></img>

            </div>
        })}
        
        </div>
        </section>
        <section className='nion py-5'>
            <h1 className='text-black text-center bg-success my-5'>Onion</h1>
    <div className='row bg-success'>
        {myonion.map((ele)=>{
            return <div className='col-md-4' key={ele.recipe_id}>
                <h2>{ele.title}</h2>
                <img src={ele.image_url} className='w-100'></img>

            </div>
        })}
        
        </div>
        </section>
        </div>
  )
}
