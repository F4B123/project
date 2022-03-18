import React from 'react';
import Header from '../Components/Header';

import '../Styles/BootstrapPage.css';

function BootstrapPage(){
    return(
        <>
        <Header/>
        
        <div class="container">
            <h1>This is a heading</h1>
            <p>This is a paragraph of text.</p>
        </div>

        <div class="container-fluid">
            <h1>This is a heading</h1>
            <p>This is a paragraph of text.</p>
        </div>

        <div class="container-sm">100% wide until screen size less than 576px</div>
        <div class="container-md">100% wide until screen size less than 768px</div>
        <div class="container-lg">100% wide until screen size less than 992px</div>
        <div class="container-xl">100% wide until screen size less than 1200px</div>

        <div class="container bg-dark text-black">
        <h1>This is a heading</h1>
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