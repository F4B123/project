import React from 'react';
import Header from '../Components/Header';


import '../Styles/BootstrapPage.css';

function BootstrapPage(){
    return(
        <>
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a href="/" class="navbar-brand">Forym</a>
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div class="navbar-nav">
                        <a href="/" class="nav-item nav-link active">Home</a>
                        <a href="/Bootstrap" class="nav-item nav-link">Bootstrap</a>
                    </div>
                    <form class="d-flex">
                        <div class="input-group">                    
                            <input type="text" class="form-control" placeholder="Search"/>
                            <button type="button" class="btn btn-secondary"><i class="bi-search"></i></button>
                        </div>
                    </form>
                    <div class="navbar-nav">
                        <a href="/login" class="nav-item nav-link">Login</a>
                    </div>
                </div>
            </div>
        </nav>

        <div class="container-fluid" id="test">
            <h1 class="display-1">This is a heading</h1>
            <p>This is a paragraph of text.</p>
        </div>

        <div class="container bg-light">
            <h1>This is a heading</h1>
            <p>This is a paragraph of text.</p>
        </div>


        <div class="container border">
            <h1>This is a heading</h1>
            <p>This is a paragraph of text.</p>
        </div>

        <div class="container border py-3 my-3">
            <h1>This is a heading</h1>
            <p>This is a paragraph of text.</p>
        </div>

        <div class="container-fluid border">
            <div class="row">
                <div class="col-md-6">
                    <div class="demo-content">Column left</div>
                </div>
                <div class="col-md-6">Column right</div>
            </div>
            
        
            <div class="row">
                <div class="col-md-4">Column left</div>
                <div class="col-md-8">Column right</div>
            </div>
            
            
            <div class="row">
                <div class="col-md-3">Column left</div>
                <div class="col-md-9">Column right</div>
            </div>

            <div class="container-fluid">
            
                <div class="row">
                    <div class="col-lg-4">Column left</div>
                    <div class="col-lg-4">
                        <div class="demo-content">Column middle</div>
                    </div>
                    <div class="col-lg-4">Column right</div>
                </div>
                
        
                <div class="row">
                    <div class="col-lg-2">Column left</div>
                    <div class="col-lg-8">Column middle</div>
                    <div class="col-lg-2">Column right</div>
                </div>
                
            
                <div class="row">
                    <div class="col-lg-3">Column left</div>
                    <div class="col-lg-7">Column middle</div>
                    <div class="col-lg-2">Column right</div>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-sm-8">Column left</div>
                    <div class="col-sm-4">
                        <div class="row">
                            <div class="col-12"></div>
                        </div>
                        <div class="row">
                            <div class="col-6"></div>
                            <div class="col-6"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default BootstrapPage;