import React , { useState } from "react";
import {InfoDump} from "./Info.js";


export default function Reviews() {
 

    const [count, setCount ] = useState(0)


 var currentReview = function() {
      return(
      <div>   
        <h2>{InfoDump.reviewData[InfoDump.reviewStatus.currentReview].company}</h2>
        <h4>{InfoDump.reviewData[InfoDump.reviewStatus.currentReview].highlight}</h4>
        <p>{InfoDump.reviewData[InfoDump.reviewStatus.currentReview].review}</p>
        <div class="author"><strong>{InfoDump.reviewData[InfoDump.reviewStatus.currentReview].author}</strong> - <em>{InfoDump.reviewData[InfoDump.reviewStatus.currentReview].authorInfo}</em></div>
     </div> 
     ) 
    }



    var leftClickBTN = function() {
        if (InfoDump.reviewStatus.currentReview === 0){
            console.log('Do Nothing')
        }else{
            reviewLeftClick();
            setCount(count-1)
        } 
    }

    var rightClickBTN = function(){
        if (InfoDump.reviewStatus.currentReview === (InfoDump.reviewData.length - 1)){
            console.log('Do Nothing')
        }else{
            reviewRightClick();
            setCount(count+1)
        }
    }


    function reviewLeftClick () {
        return (
            {
            InfoDump:{
            reviewStatus:{
                currentReview : InfoDump.reviewStatus.currentReview--
            }
        }}
        )
    }

    function reviewRightClick () {
        return (
            {
                InfoDump:{
            reviewStatus:{
                currentReview : InfoDump.reviewStatus.currentReview++
            }
        }}
        )
    }





    return (
      
<section id="Reviews">
      <div class="container">
            <div class="row">
                <div class="col-md-8 "> 
                    <div class="side-img">
                    <img src="https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/GBAJWSUV3EI6RAML5G3TJDGYPU.jpg" alt="Smiling Chef" />
                    </div>
                </div>
                <div class="col-md-4">
                    <h5 class="comp-title">Reviews</h5>
                    {currentReview()}
                    <div class="arrows">
                        <i onClick={leftClickBTN}
                         class={`fa fa-arrow-left ${(InfoDump.reviewStatus.currentReview > 0) ? 'ready' : ''}`} aria-hidden="true"></i>
                        <i onClick={rightClickBTN }
                         class={`fa fa-arrow-right ${(InfoDump.reviewStatus.currentReview === (InfoDump.reviewData.length - 1)) ? '' : 'ready'}`} aria-hidden="true"></i>
                    </div>
                </div>
            </div>
       </div>
</section>
    );
  }