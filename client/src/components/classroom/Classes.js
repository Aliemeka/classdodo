import React from 'react'

const Classes = () =>{
    return (
        <main class="main-area pt-5 pb-2">
        <h1 class="text-center">All Classes</h1>
        <section class="courses-area container full-width mt-4 mb-4">
            <div class="row justify-content-center">
                <div class="col-sm-6 col-md-4 col-lg-3 p-1 mb-2">  
                    <div class="card text-center d-flex">
                        <h2>English</h2>
                        <p><button class="btn btn-md btn-dark">Start</button></p>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 mb-2 p-1">  
                    <div class="card text-center d-flex">
                        <h2>Mathematics</h2>
                        <p><button class="btn btn-md btn-dark">Start</button></p>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 mb-2 p-1">  
                    <div class="card text-center d-flex">
                        <h2>Physics</h2>
                        <p><button class="btn btn-md btn-dark">Start</button></p>
                    </div>
                </div>
                <div class="col-sm-6 col-md-4 mb-2 p-1">  
                    <div class="card text-center d-flex">
                        <h2>Physics</h2>
                        <p><button class="btn btn-md btn-dark">Start</button></p>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}

export default Classes