import React from 'react'

const Hero = () => {
    return (
        <div className='md:w-3/5 w-2/3 h-3/4'>
            <div className="!hero bg-base-200 min-h-full min-w-full rounded-2xl">
                <div className="!hero-content min-w-3/5 text-center">
                    <div className="max-w-full">
                        <h1 className="text-5xl font-semibold">Experimente Produtos em 3D</h1>
                        <p className="!pt-6 !pb-9 text-xl font-light italic">
                            Explore nossos modelos 3d interativos e visualize melhor os produtos antes de comprar!
                        </p>
                        <button className="!btn !btn-primary !rounded-md">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero