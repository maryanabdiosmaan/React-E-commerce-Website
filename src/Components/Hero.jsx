
function Hero(){
    return <div className="sm:h-[400px] h-[200px] sm:px-20 px-10 sm:flex sm:flex-row flex-col justify-between">
        <div className="mt-20 w-[580px]">
        <h1 className="font-bold sm:text-4xl text-2xl">Best Place For Shopping <br /> In Your Area</h1>
        <p className="mt-8 sm:text-2xl ">We go you everything that you need. visit us <br /> anywhere and anytime</p>
        <button className="bg-secondrycolor sm:mt-5 mt-2 sm:px-10 px-2 sm:py-3 py-2  sm:text-3xl rounded text-secondaryColor">Explor More <i class="fa-solid fa-arrow-right"></i> </button>
        </div>
        <img className="rounded-xl mt-16" src="https://img.freepik.com/free-photo/two-beautiful-women-shopping-town_1303-16432.jpg?size=626&ext=jpg&ga=GA1.1.538407488.1704096226&semt=sph"/>
    </div>
    
}
export default Hero
