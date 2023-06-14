import React, {useState} from "react";

function Footer(props){
    return(
        <footer class="py-3 my-4 ">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">HOME</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">REGISTRATI</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">PRICING</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">ABOUT</a></li>
    </ul>
    <p class="text-center text-muted"> 2023/2024 VUE©, Inc</p>
  </footer>
    )
}
export default Footer;