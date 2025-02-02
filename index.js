const urlParams = new URLSearchParams(window.location.search); 
        let inp1 = urlParams.get('nameF');
        let inp2 = urlParams.get('nameS');
        document.getElementById("name1").innerHTML = inp1;
        document.getElementById("name2").innerHTML = inp2;

        var ranFunc = ["pCol1", "pCol2", "pCol3", "pCol4", "pCol5","pCol6", "pCol7", "pCol8", "pCol9", "pCol10","pCol11", "pCol12", "pCol13", "pCol14", "pCol15","pCol16", "pCol17", "pCol18", "pCol19", "pCol20","pCol21", "pCol22", "pCol23", "pCol24", "pCol25"];
        var randomNumber = Math.floor(Math.random() * 25);
        let me = ranFunc[randomNumber];
        if (me == "pCol1") {
            function pCol1() {
                document.querySelector(".col1").style.animation = 'redA 400ms linear';
                document.querySelector(".col1").style.transform = 'rotateX(180deg)';
                document.querySelector(".col1").style.backgroundColor = 'red';

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");

                    const urlParams = new URLSearchParams(window.location.search); 
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp2+"</b><br> Проиграл: <b style='color:red;'>"+inp1+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                } else if(name2 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp1+"</b><br> Проиграл: <b style='color:red;'>"+inp2+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                }
            }
            function pCol2() {
                
                document.querySelector(".col2").style.animation = 'blueA 400ms linear';
                document.querySelector(".col2").style.transform = 'rotateX(180deg)';
                document.querySelector(".col2").style.backgroundColor = 'blue';
                document.querySelector(".col2").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol3() {
                document.querySelector(".col3").style.animation = 'blueA 400ms linear';
                document.querySelector(".col3").style.transform = 'rotateX(180deg)';
                document.querySelector(".col3").style.backgroundColor = 'blue';
                 document.querySelector(".col3").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol4() {
                document.querySelector(".col4").style.animation = 'blueA 400ms linear';
                document.querySelector(".col4").style.transform = 'rotateX(180deg)';
                document.querySelector(".col4").style.backgroundColor = 'blue';
                 document.querySelector(".col4").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol5() {
                document.querySelector(".col5").style.animation = 'blueA 400ms linear';
                document.querySelector(".col5").style.transform = 'rotateX(180deg)';
                document.querySelector(".col5").style.backgroundColor = 'blue';
                 document.querySelector(".col5").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol6() {
                document.querySelector(".col6").style.animation = 'blueA 400ms linear';
                document.querySelector(".col6").style.transform = 'rotateX(180deg)';
                document.querySelector(".col6").style.backgroundColor = 'blue';
                 document.querySelector(".col6").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol7() {
                document.querySelector(".col7").style.animation = 'blueA 400ms linear';
                document.querySelector(".col7").style.transform = 'rotateX(180deg)';
                document.querySelector(".col7").style.backgroundColor = 'blue';
                 document.querySelector(".col7").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol8() {
                document.querySelector(".col8").style.animation = 'blueA 400ms linear';
                document.querySelector(".col8").style.transform = 'rotateX(180deg)';
                document.querySelector(".col8").style.backgroundColor = 'blue';
                 document.querySelector(".col8").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol9() {
                document.querySelector(".col9").style.animation = 'blueA 400ms linear';
                document.querySelector(".col9").style.transform = 'rotateX(180deg)';
                document.querySelector(".col9").style.backgroundColor = 'blue';
                 document.querySelector(".col9").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol10() {
                document.querySelector(".col10").style.animation = 'blueA 400ms linear';
                document.querySelector(".col10").style.transform = 'rotateX(180deg)';
                document.querySelector(".col10").style.backgroundColor = 'blue';
                 document.querySelector(".col10").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol11() {
                document.querySelector(".col11").style.animation = 'blueA 400ms linear';
                document.querySelector(".col11").style.transform = 'rotateX(180deg)';
                document.querySelector(".col11").style.backgroundColor = 'blue';
                 document.querySelector(".col11").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol12() {
                document.querySelector(".col12").style.animation = 'blueA 400ms linear';
                document.querySelector(".col12").style.transform = 'rotateX(180deg)';
                document.querySelector(".col12").style.backgroundColor = 'blue';
                 document.querySelector(".col12").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol13() {
                document.querySelector(".col13").style.animation = 'blueA 400ms linear';
                document.querySelector(".col13").style.transform = 'rotateX(180deg)';
                document.querySelector(".col13").style.backgroundColor = 'blue';
                 document.querySelector(".col13").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol14() {
                document.querySelector(".col14").style.animation = 'blueA 400ms linear';
                document.querySelector(".col14").style.transform = 'rotateX(180deg)';
                document.querySelector(".col14").style.backgroundColor = 'blue';
                 document.querySelector(".col14").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol15() {
                document.querySelector(".col15").style.animation = 'blueA 400ms linear';
                document.querySelector(".col15").style.transform = 'rotateX(180deg)';
                document.querySelector(".col15").style.backgroundColor = 'blue';
                 document.querySelector(".col15").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol16() {
                document.querySelector(".col16").style.animation = 'blueA 400ms linear';
                document.querySelector(".col16").style.transform = 'rotateX(180deg)';
                document.querySelector(".col16").style.backgroundColor = 'blue';
                 document.querySelector(".col16").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol17() {
                document.querySelector(".col17").style.animation = 'blueA 400ms linear';
                document.querySelector(".col17").style.transform = 'rotateX(180deg)';
                document.querySelector(".col17").style.backgroundColor = 'blue';
                 document.querySelector(".col17").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol18() {
                document.querySelector(".col18").style.animation = 'blueA 400ms linear';
                document.querySelector(".col18").style.transform = 'rotateX(180deg)';
                document.querySelector(".col18").style.backgroundColor = 'blue';
                 document.querySelector(".col18").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol19() {
                document.querySelector(".col19").style.animation = 'blueA 400ms linear';
                document.querySelector(".col19").style.transform = 'rotateX(180deg)';
                document.querySelector(".col19").style.backgroundColor = 'blue';
                 document.querySelector(".col19").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol20() {
                document.querySelector(".col20").style.animation = 'blueA 400ms linear';
                document.querySelector(".col20").style.transform = 'rotateX(180deg)';
                document.querySelector(".col20").style.backgroundColor = 'blue';
                 document.querySelector(".col20").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol21() {
                document.querySelector(".col21").style.animation = 'blueA 400ms linear';
                document.querySelector(".col21").style.transform = 'rotateX(180deg)';
                document.querySelector(".col21").style.backgroundColor = 'blue';
                 document.querySelector(".col21").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol22() {
                document.querySelector(".col22").style.animation = 'blueA 400ms linear';
                document.querySelector(".col22").style.transform = 'rotateX(180deg)';
                document.querySelector(".col22").style.backgroundColor = 'blue';
                 document.querySelector(".col22").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol23() {
                document.querySelector(".col23").style.animation = 'blueA 400ms linear';
                document.querySelector(".col23").style.transform = 'rotateX(180deg)';
                document.querySelector(".col23").style.backgroundColor = 'blue';
                 document.querySelector(".col23").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol24() {
                document.querySelector(".col24").style.animation = 'blueA 400ms linear';
                document.querySelector(".col24").style.transform = 'rotateX(180deg)';
                document.querySelector(".col24").style.backgroundColor = 'blue';
                 document.querySelector(".col24").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol25() {
                document.querySelector(".col25").style.animation = 'blueA 400ms linear';
                document.querySelector(".col25").style.transform = 'rotateX(180deg)';
                document.querySelector(".col25").style.backgroundColor = 'blue';
                 document.querySelector(".col25").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
        }
        else if (me == "pCol2"){
            function pCol2() {
                document.querySelector(".col2").style.animation = 'redA 400ms linear';
                document.querySelector(".col2").style.transform = 'rotateX(180deg)';
                document.querySelector(".col2").style.backgroundColor = 'red';

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp2+"</b><br> Проиграл: <b style='color:red;'>"+inp1+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                } else if(name2 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp1+"</b><br> Проиграл: <b style='color:red;'>"+inp2+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                }
            }
            function pCol1() {
                document.querySelector(".col1").style.animation = 'blueA 400ms linear';
                document.querySelector(".col1").style.transform = 'rotateX(180deg)';
                document.querySelector(".col1").style.backgroundColor = 'blue';
                 document.querySelector(".col1").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol3() {
                document.querySelector(".col3").style.animation = 'blueA 400ms linear';
                document.querySelector(".col3").style.transform = 'rotateX(180deg)';
                document.querySelector(".col3").style.backgroundColor = 'blue';
                 document.querySelector(".col3").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol4() {
                document.querySelector(".col4").style.animation = 'blueA 400ms linear';
                document.querySelector(".col4").style.transform = 'rotateX(180deg)';
                document.querySelector(".col4").style.backgroundColor = 'blue';
                 document.querySelector(".col4").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol5() {
                document.querySelector(".col5").style.animation = 'blueA 400ms linear';
                document.querySelector(".col5").style.transform = 'rotateX(180deg)';
                document.querySelector(".col5").style.backgroundColor = 'blue';
                 document.querySelector(".col5").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol6() {
                document.querySelector(".col6").style.animation = 'blueA 400ms linear';
                document.querySelector(".col6").style.transform = 'rotateX(180deg)';
                document.querySelector(".col6").style.backgroundColor = 'blue';
                 document.querySelector(".col6").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol7() {
                document.querySelector(".col7").style.animation = 'blueA 400ms linear';
                document.querySelector(".col7").style.transform = 'rotateX(180deg)';
                document.querySelector(".col7").style.backgroundColor = 'blue';
                 document.querySelector(".col7").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol8() {
                document.querySelector(".col8").style.animation = 'blueA 400ms linear';
                document.querySelector(".col8").style.transform = 'rotateX(180deg)';
                document.querySelector(".col8").style.backgroundColor = 'blue';
                 document.querySelector(".col8").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol9() {
                document.querySelector(".col9").style.animation = 'blueA 400ms linear';
                document.querySelector(".col9").style.transform = 'rotateX(180deg)';
                document.querySelector(".col9").style.backgroundColor = 'blue';
                 document.querySelector(".col9").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol10() {
                document.querySelector(".col10").style.animation = 'blueA 400ms linear';
                document.querySelector(".col10").style.transform = 'rotateX(180deg)';
                document.querySelector(".col10").style.backgroundColor = 'blue';
                 document.querySelector(".col10").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol11() {
                document.querySelector(".col11").style.animation = 'blueA 400ms linear';
                document.querySelector(".col11").style.transform = 'rotateX(180deg)';
                document.querySelector(".col11").style.backgroundColor = 'blue';
                 document.querySelector(".col11").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol12() {
                document.querySelector(".col12").style.animation = 'blueA 400ms linear';
                document.querySelector(".col12").style.transform = 'rotateX(180deg)';
                document.querySelector(".col12").style.backgroundColor = 'blue';
                 document.querySelector(".col12").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol13() {
                document.querySelector(".col13").style.animation = 'blueA 400ms linear';
                document.querySelector(".col13").style.transform = 'rotateX(180deg)';
                document.querySelector(".col13").style.backgroundColor = 'blue';
                 document.querySelector(".col13").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol14() {
                document.querySelector(".col14").style.animation = 'blueA 400ms linear';
                document.querySelector(".col14").style.transform = 'rotateX(180deg)';
                document.querySelector(".col14").style.backgroundColor = 'blue';
                 document.querySelector(".col14").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol15() {
                document.querySelector(".col15").style.animation = 'blueA 400ms linear';
                document.querySelector(".col15").style.transform = 'rotateX(180deg)';
                document.querySelector(".col15").style.backgroundColor = 'blue';
                 document.querySelector(".col15").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol16() {
                document.querySelector(".col16").style.animation = 'blueA 400ms linear';
                document.querySelector(".col16").style.transform = 'rotateX(180deg)';
                document.querySelector(".col16").style.backgroundColor = 'blue';
                 document.querySelector(".col16").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol17() {
                document.querySelector(".col17").style.animation = 'blueA 400ms linear';
                document.querySelector(".col17").style.transform = 'rotateX(180deg)';
                document.querySelector(".col17").style.backgroundColor = 'blue';
                 document.querySelector(".col17").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol18() {
                document.querySelector(".col18").style.animation = 'blueA 400ms linear';
                document.querySelector(".col18").style.transform = 'rotateX(180deg)';
                document.querySelector(".col18").style.backgroundColor = 'blue';
                 document.querySelector(".col18").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol19() {
                document.querySelector(".col19").style.animation = 'blueA 400ms linear';
                document.querySelector(".col19").style.transform = 'rotateX(180deg)';
                document.querySelector(".col19").style.backgroundColor = 'blue';
                 document.querySelector(".col19").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol20() {
                document.querySelector(".col20").style.animation = 'blueA 400ms linear';
                document.querySelector(".col20").style.transform = 'rotateX(180deg)';
                document.querySelector(".col20").style.backgroundColor = 'blue';
                 document.querySelector(".col20").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol21() {
                document.querySelector(".col21").style.animation = 'blueA 400ms linear';
                document.querySelector(".col21").style.transform = 'rotateX(180deg)';
                document.querySelector(".col21").style.backgroundColor = 'blue';
                 document.querySelector(".col21").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol22() {
                document.querySelector(".col22").style.animation = 'blueA 400ms linear';
                document.querySelector(".col22").style.transform = 'rotateX(180deg)';
                document.querySelector(".col22").style.backgroundColor = 'blue';
                 document.querySelector(".col22").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol23() {
                document.querySelector(".col23").style.animation = 'blueA 400ms linear';
                document.querySelector(".col23").style.transform = 'rotateX(180deg)';
                document.querySelector(".col23").style.backgroundColor = 'blue';
                 document.querySelector(".col23").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol24() {
                document.querySelector(".col24").style.animation = 'blueA 400ms linear';
                document.querySelector(".col24").style.transform = 'rotateX(180deg)';
                document.querySelector(".col24").style.backgroundColor = 'blue';
                 document.querySelector(".col24").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol25() {
                document.querySelector(".col25").style.animation = 'blueA 400ms linear';
                document.querySelector(".col25").style.transform = 'rotateX(180deg)';
                document.querySelector(".col25").style.backgroundColor = 'blue';
                 document.querySelector(".col25").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
        }
        else if (me == "pCol3"){
            function pCol3() {
                document.querySelector(".col3").style.animation = 'redA 400ms linear';
                document.querySelector(".col3").style.transform = 'rotateX(180deg)';
                document.querySelector(".col3").style.backgroundColor = 'red';

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp2+"</b><br> Проиграл: <b style='color:red;'>"+inp1+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                } else if(name2 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp1+"</b><br> Проиграл: <b style='color:red;'>"+inp2+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                }
            }
            function pCol2() {
                document.querySelector(".col2").style.animation = 'blueA 400ms linear';
                document.querySelector(".col2").style.transform = 'rotateX(180deg)';
                document.querySelector(".col2").style.backgroundColor = 'blue';
                 document.querySelector(".col2").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol1() {
                document.querySelector(".col1").style.animation = 'blueA 400ms linear';
                document.querySelector(".col1").style.transform = 'rotateX(180deg)';
                document.querySelector(".col1").style.backgroundColor = 'blue';
                 document.querySelector(".col1").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol4() {
                document.querySelector(".col4").style.animation = 'blueA 400ms linear';
                document.querySelector(".col4").style.transform = 'rotateX(180deg)';
                document.querySelector(".col4").style.backgroundColor = 'blue';
                 document.querySelector(".col4").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol5() {
                document.querySelector(".col5").style.animation = 'blueA 400ms linear';
                document.querySelector(".col5").style.transform = 'rotateX(180deg)';
                document.querySelector(".col5").style.backgroundColor = 'blue';
                 document.querySelector(".col5").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol6() {
                document.querySelector(".col6").style.animation = 'blueA 400ms linear';
                document.querySelector(".col6").style.transform = 'rotateX(180deg)';
                document.querySelector(".col6").style.backgroundColor = 'blue';
                 document.querySelector(".col6").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol7() {
                document.querySelector(".col7").style.animation = 'blueA 400ms linear';
                document.querySelector(".col7").style.transform = 'rotateX(180deg)';
                document.querySelector(".col7").style.backgroundColor = 'blue';
                 document.querySelector(".col7").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol8() {
                document.querySelector(".col8").style.animation = 'blueA 400ms linear';
                document.querySelector(".col8").style.transform = 'rotateX(180deg)';
                document.querySelector(".col8").style.backgroundColor = 'blue';
                 document.querySelector(".col8").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol9() {
                document.querySelector(".col9").style.animation = 'blueA 400ms linear';
                document.querySelector(".col9").style.transform = 'rotateX(180deg)';
                document.querySelector(".col9").style.backgroundColor = 'blue';
                 document.querySelector(".col9").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol10() {
                document.querySelector(".col10").style.animation = 'blueA 400ms linear';
                document.querySelector(".col10").style.transform = 'rotateX(180deg)';
                document.querySelector(".col10").style.backgroundColor = 'blue';
                 document.querySelector(".col10").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol11() {
                document.querySelector(".col11").style.animation = 'blueA 400ms linear';
                document.querySelector(".col11").style.transform = 'rotateX(180deg)';
                document.querySelector(".col11").style.backgroundColor = 'blue';
                 document.querySelector(".col11").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol12() {
                document.querySelector(".col12").style.animation = 'blueA 400ms linear';
                document.querySelector(".col12").style.transform = 'rotateX(180deg)';
                document.querySelector(".col12").style.backgroundColor = 'blue';
                 document.querySelector(".col12").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol13() {
                document.querySelector(".col13").style.animation = 'blueA 400ms linear';
                document.querySelector(".col13").style.transform = 'rotateX(180deg)';
                document.querySelector(".col13").style.backgroundColor = 'blue';
                 document.querySelector(".col13").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol14() {
                document.querySelector(".col14").style.animation = 'blueA 400ms linear';
                document.querySelector(".col14").style.transform = 'rotateX(180deg)';
                document.querySelector(".col14").style.backgroundColor = 'blue';
                 document.querySelector(".col14").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol15() {
                document.querySelector(".col15").style.animation = 'blueA 400ms linear';
                document.querySelector(".col15").style.transform = 'rotateX(180deg)';
                document.querySelector(".col15").style.backgroundColor = 'blue';
                 document.querySelector(".col15").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol16() {
                document.querySelector(".col16").style.animation = 'blueA 400ms linear';
                document.querySelector(".col16").style.transform = 'rotateX(180deg)';
                document.querySelector(".col16").style.backgroundColor = 'blue';
                 document.querySelector(".col16").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol17() {
                document.querySelector(".col17").style.animation = 'blueA 400ms linear';
                document.querySelector(".col17").style.transform = 'rotateX(180deg)';
                document.querySelector(".col17").style.backgroundColor = 'blue';
                 document.querySelector(".col17").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol18() {
                document.querySelector(".col18").style.animation = 'blueA 400ms linear';
                document.querySelector(".col18").style.transform = 'rotateX(180deg)';
                document.querySelector(".col18").style.backgroundColor = 'blue';
                 document.querySelector(".col18").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol19() {
                document.querySelector(".col19").style.animation = 'blueA 400ms linear';
                document.querySelector(".col19").style.transform = 'rotateX(180deg)';
                document.querySelector(".col19").style.backgroundColor = 'blue';
                 document.querySelector(".col19").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol20() {
                document.querySelector(".col20").style.animation = 'blueA 400ms linear';
                document.querySelector(".col20").style.transform = 'rotateX(180deg)';
                document.querySelector(".col20").style.backgroundColor = 'blue';
                 document.querySelector(".col20").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol21() {
                document.querySelector(".col21").style.animation = 'blueA 400ms linear';
                document.querySelector(".col21").style.transform = 'rotateX(180deg)';
                document.querySelector(".col21").style.backgroundColor = 'blue';
                 document.querySelector(".col21").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol22() {
                document.querySelector(".col22").style.animation = 'blueA 400ms linear';
                document.querySelector(".col22").style.transform = 'rotateX(180deg)';
                document.querySelector(".col22").style.backgroundColor = 'blue';
                 document.querySelector(".col22").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol23() {
                document.querySelector(".col23").style.animation = 'blueA 400ms linear';
                document.querySelector(".col23").style.transform = 'rotateX(180deg)';
                document.querySelector(".col23").style.backgroundColor = 'blue';
                 document.querySelector(".col23").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol24() {
                document.querySelector(".col24").style.animation = 'blueA 400ms linear';
                document.querySelector(".col24").style.transform = 'rotateX(180deg)';
                document.querySelector(".col24").style.backgroundColor = 'blue';
                 document.querySelector(".col24").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol25() {
                document.querySelector(".col25").style.animation = 'blueA 400ms linear';
                document.querySelector(".col25").style.transform = 'rotateX(180deg)';
                document.querySelector(".col25").style.backgroundColor = 'blue';
                 document.querySelector(".col25").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
        }
        else if (me == "pCol4"){
            function pCol4() {
                document.querySelector(".col4").style.animation = 'redA 400ms linear';
                document.querySelector(".col4").style.transform = 'rotateX(180deg)';
                document.querySelector(".col4").style.backgroundColor = 'red';

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp2+"</b><br> Проиграл: <b style='color:red;'>"+inp1+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                } else if(name2 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp1+"</b><br> Проиграл: <b style='color:red;'>"+inp2+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                }
            }
            function pCol2() {
                document.querySelector(".col2").style.animation = 'blueA 400ms linear';
                document.querySelector(".col2").style.transform = 'rotateX(180deg)';
                document.querySelector(".col2").style.backgroundColor = 'blue';
                 document.querySelector(".col2").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol3() {
                document.querySelector(".col3").style.animation = 'blueA 400ms linear';
                document.querySelector(".col3").style.transform = 'rotateX(180deg)';
                document.querySelector(".col3").style.backgroundColor = 'blue';
                 document.querySelector(".col3").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol1() {
                document.querySelector(".col1").style.animation = 'blueA 400ms linear';
                document.querySelector(".col1").style.transform = 'rotateX(180deg)';
                document.querySelector(".col1").style.backgroundColor = 'blue';
                 document.querySelector(".col1").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol5() {
                document.querySelector(".col5").style.animation = 'blueA 400ms linear';
                document.querySelector(".col5").style.transform = 'rotateX(180deg)';
                document.querySelector(".col5").style.backgroundColor = 'blue';
                 document.querySelector(".col5").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol6() {
                document.querySelector(".col6").style.animation = 'blueA 400ms linear';
                document.querySelector(".col6").style.transform = 'rotateX(180deg)';
                document.querySelector(".col6").style.backgroundColor = 'blue';
                 document.querySelector(".col6").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol7() {
                document.querySelector(".col7").style.animation = 'blueA 400ms linear';
                document.querySelector(".col7").style.transform = 'rotateX(180deg)';
                document.querySelector(".col7").style.backgroundColor = 'blue';
                 document.querySelector(".col7").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol8() {
                document.querySelector(".col8").style.animation = 'blueA 400ms linear';
                document.querySelector(".col8").style.transform = 'rotateX(180deg)';
                document.querySelector(".col8").style.backgroundColor = 'blue';
                 document.querySelector(".col8").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol9() {
                document.querySelector(".col9").style.animation = 'blueA 400ms linear';
                document.querySelector(".col9").style.transform = 'rotateX(180deg)';
                document.querySelector(".col9").style.backgroundColor = 'blue';
                 document.querySelector(".col9").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol10() {
                document.querySelector(".col10").style.animation = 'blueA 400ms linear';
                document.querySelector(".col10").style.transform = 'rotateX(180deg)';
                document.querySelector(".col10").style.backgroundColor = 'blue';
                 document.querySelector(".col10").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol11() {
                document.querySelector(".col11").style.animation = 'blueA 400ms linear';
                document.querySelector(".col11").style.transform = 'rotateX(180deg)';
                document.querySelector(".col11").style.backgroundColor = 'blue';
                 document.querySelector(".col11").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol12() {
                document.querySelector(".col12").style.animation = 'blueA 400ms linear';
                document.querySelector(".col12").style.transform = 'rotateX(180deg)';
                document.querySelector(".col12").style.backgroundColor = 'blue';
                 document.querySelector(".col12").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol13() {
                document.querySelector(".col13").style.animation = 'blueA 400ms linear';
                document.querySelector(".col13").style.transform = 'rotateX(180deg)';
                document.querySelector(".col13").style.backgroundColor = 'blue';
                 document.querySelector(".col13").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol14() {
                document.querySelector(".col14").style.animation = 'blueA 400ms linear';
                document.querySelector(".col14").style.transform = 'rotateX(180deg)';
                document.querySelector(".col14").style.backgroundColor = 'blue';
                 document.querySelector(".col14").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol15() {
                document.querySelector(".col15").style.animation = 'blueA 400ms linear';
                document.querySelector(".col15").style.transform = 'rotateX(180deg)';
                document.querySelector(".col15").style.backgroundColor = 'blue';
                 document.querySelector(".col15").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol16() {
                document.querySelector(".col16").style.animation = 'blueA 400ms linear';
                document.querySelector(".col16").style.transform = 'rotateX(180deg)';
                document.querySelector(".col16").style.backgroundColor = 'blue';
                 document.querySelector(".col16").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol17() {
                document.querySelector(".col17").style.animation = 'blueA 400ms linear';
                document.querySelector(".col17").style.transform = 'rotateX(180deg)';
                document.querySelector(".col17").style.backgroundColor = 'blue';
                 document.querySelector(".col17").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol18() {
                document.querySelector(".col18").style.animation = 'blueA 400ms linear';
                document.querySelector(".col18").style.transform = 'rotateX(180deg)';
                document.querySelector(".col18").style.backgroundColor = 'blue';
                 document.querySelector(".col18").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol19() {
                document.querySelector(".col19").style.animation = 'blueA 400ms linear';
                document.querySelector(".col19").style.transform = 'rotateX(180deg)';
                document.querySelector(".col19").style.backgroundColor = 'blue';
                 document.querySelector(".col19").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol20() {
                document.querySelector(".col20").style.animation = 'blueA 400ms linear';
                document.querySelector(".col20").style.transform = 'rotateX(180deg)';
                document.querySelector(".col20").style.backgroundColor = 'blue';
                 document.querySelector(".col20").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol21() {
                document.querySelector(".col21").style.animation = 'blueA 400ms linear';
                document.querySelector(".col21").style.transform = 'rotateX(180deg)';
                document.querySelector(".col21").style.backgroundColor = 'blue';
                 document.querySelector(".col21").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol22() {
                document.querySelector(".col22").style.animation = 'blueA 400ms linear';
                document.querySelector(".col22").style.transform = 'rotateX(180deg)';
                document.querySelector(".col22").style.backgroundColor = 'blue';
                 document.querySelector(".col22").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol23() {
                document.querySelector(".col23").style.animation = 'blueA 400ms linear';
                document.querySelector(".col23").style.transform = 'rotateX(180deg)';
                document.querySelector(".col23").style.backgroundColor = 'blue';
                 document.querySelector(".col23").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol24() {
                document.querySelector(".col24").style.animation = 'blueA 400ms linear';
                document.querySelector(".col24").style.transform = 'rotateX(180deg)';
                document.querySelector(".col24").style.backgroundColor = 'blue';
                 document.querySelector(".col24").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol25() {
                document.querySelector(".col25").style.animation = 'blueA 400ms linear';
                document.querySelector(".col25").style.transform = 'rotateX(180deg)';
                document.querySelector(".col25").style.backgroundColor = 'blue';
                 document.querySelector(".col25").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
        }
        else if (me == "pCol5"){
            function pCol5() {
                document.querySelector(".col5").style.animation = 'redA 400ms linear';
                document.querySelector(".col5").style.transform = 'rotateX(180deg)';
                document.querySelector(".col5").style.backgroundColor = 'red';

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp2+"</b><br> Проиграл: <b style='color:red;'>"+inp1+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                } else if(name2 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp1+"</b><br> Проиграл: <b style='color:red;'>"+inp2+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                }
            }
            function pCol2() {
                document.querySelector(".col2").style.animation = 'blueA 400ms linear';
                document.querySelector(".col2").style.transform = 'rotateX(180deg)';
                document.querySelector(".col2").style.backgroundColor = 'blue';
                 document.querySelector(".col2").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol3() {
                document.querySelector(".col3").style.animation = 'blueA 400ms linear';
                document.querySelector(".col3").style.transform = 'rotateX(180deg)';
                document.querySelector(".col3").style.backgroundColor = 'blue';
                 document.querySelector(".col3").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol4() {
                document.querySelector(".col4").style.animation = 'blueA 400ms linear';
                document.querySelector(".col4").style.transform = 'rotateX(180deg)';
                document.querySelector(".col4").style.backgroundColor = 'blue';
                 document.querySelector(".col4").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol1() {
                document.querySelector(".col1").style.animation = 'blueA 400ms linear';
                document.querySelector(".col1").style.transform = 'rotateX(180deg)';
                document.querySelector(".col1").style.backgroundColor = 'blue';
                 document.querySelector(".col1").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol6() {
                document.querySelector(".col6").style.animation = 'blueA 400ms linear';
                document.querySelector(".col6").style.transform = 'rotateX(180deg)';
                document.querySelector(".col6").style.backgroundColor = 'blue';
                 document.querySelector(".col6").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol7() {
                document.querySelector(".col7").style.animation = 'blueA 400ms linear';
                document.querySelector(".col7").style.transform = 'rotateX(180deg)';
                document.querySelector(".col7").style.backgroundColor = 'blue';
                 document.querySelector(".col7").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol8() {
                document.querySelector(".col8").style.animation = 'blueA 400ms linear';
                document.querySelector(".col8").style.transform = 'rotateX(180deg)';
                document.querySelector(".col8").style.backgroundColor = 'blue';
                 document.querySelector(".col8").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol9() {
                document.querySelector(".col9").style.animation = 'blueA 400ms linear';
                document.querySelector(".col9").style.transform = 'rotateX(180deg)';
                document.querySelector(".col9").style.backgroundColor = 'blue';
                 document.querySelector(".col9").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol10() {
                document.querySelector(".col10").style.animation = 'blueA 400ms linear';
                document.querySelector(".col10").style.transform = 'rotateX(180deg)';
                document.querySelector(".col10").style.backgroundColor = 'blue';
                 document.querySelector(".col10").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol11() {
                document.querySelector(".col11").style.animation = 'blueA 400ms linear';
                document.querySelector(".col11").style.transform = 'rotateX(180deg)';
                document.querySelector(".col11").style.backgroundColor = 'blue';
                 document.querySelector(".col11").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol12() {
                document.querySelector(".col12").style.animation = 'blueA 400ms linear';
                document.querySelector(".col12").style.transform = 'rotateX(180deg)';
                document.querySelector(".col12").style.backgroundColor = 'blue';
                 document.querySelector(".col12").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol13() {
                document.querySelector(".col13").style.animation = 'blueA 400ms linear';
                document.querySelector(".col13").style.transform = 'rotateX(180deg)';
                document.querySelector(".col13").style.backgroundColor = 'blue';
                 document.querySelector(".col13").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol14() {
                document.querySelector(".col14").style.animation = 'blueA 400ms linear';
                document.querySelector(".col14").style.transform = 'rotateX(180deg)';
                document.querySelector(".col14").style.backgroundColor = 'blue';
                 document.querySelector(".col14").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol15() {
                document.querySelector(".col15").style.animation = 'blueA 400ms linear';
                document.querySelector(".col15").style.transform = 'rotateX(180deg)';
                document.querySelector(".col15").style.backgroundColor = 'blue';
                 document.querySelector(".col15").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol16() {
                document.querySelector(".col16").style.animation = 'blueA 400ms linear';
                document.querySelector(".col16").style.transform = 'rotateX(180deg)';
                document.querySelector(".col16").style.backgroundColor = 'blue';
                 document.querySelector(".col16").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol17() {
                document.querySelector(".col17").style.animation = 'blueA 400ms linear';
                document.querySelector(".col17").style.transform = 'rotateX(180deg)';
                document.querySelector(".col17").style.backgroundColor = 'blue';
                 document.querySelector(".col17").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol18() {
                document.querySelector(".col18").style.animation = 'blueA 400ms linear';
                document.querySelector(".col18").style.transform = 'rotateX(180deg)';
                document.querySelector(".col18").style.backgroundColor = 'blue';
                 document.querySelector(".col18").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol19() {
                document.querySelector(".col19").style.animation = 'blueA 400ms linear';
                document.querySelector(".col19").style.transform = 'rotateX(180deg)';
                document.querySelector(".col19").style.backgroundColor = 'blue';
                 document.querySelector(".col19").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol20() {
                document.querySelector(".col20").style.animation = 'blueA 400ms linear';
                document.querySelector(".col20").style.transform = 'rotateX(180deg)';
                document.querySelector(".col20").style.backgroundColor = 'blue';
                 document.querySelector(".col20").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol21() {
                document.querySelector(".col21").style.animation = 'blueA 400ms linear';
                document.querySelector(".col21").style.transform = 'rotateX(180deg)';
                document.querySelector(".col21").style.backgroundColor = 'blue';
                 document.querySelector(".col21").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol22() {
                document.querySelector(".col22").style.animation = 'blueA 400ms linear';
                document.querySelector(".col22").style.transform = 'rotateX(180deg)';
                document.querySelector(".col22").style.backgroundColor = 'blue';
                 document.querySelector(".col22").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol23() {
                document.querySelector(".col23").style.animation = 'blueA 400ms linear';
                document.querySelector(".col23").style.transform = 'rotateX(180deg)';
                document.querySelector(".col23").style.backgroundColor = 'blue';
                 document.querySelector(".col23").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol24() {
                document.querySelector(".col24").style.animation = 'blueA 400ms linear';
                document.querySelector(".col24").style.transform = 'rotateX(180deg)';
                document.querySelector(".col24").style.backgroundColor = 'blue';
                 document.querySelector(".col24").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol25() {
                document.querySelector(".col25").style.animation = 'blueA 400ms linear';
                document.querySelector(".col25").style.transform = 'rotateX(180deg)';
                document.querySelector(".col25").style.backgroundColor = 'blue';
                 document.querySelector(".col25").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
        }
        else if (me == "pCol6"){
            function pCol6() {
                document.querySelector(".col6").style.animation = 'redA 400ms linear';
                document.querySelector(".col6").style.transform = 'rotateX(180deg)';
                document.querySelector(".col6").style.backgroundColor = 'red';

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp2+"</b><br> Проиграл: <b style='color:red;'>"+inp1+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                } else if(name2 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp1+"</b><br> Проиграл: <b style='color:red;'>"+inp2+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                }
            }
            function pCol2() {
                document.querySelector(".col2").style.animation = 'blueA 400ms linear';
                document.querySelector(".col2").style.transform = 'rotateX(180deg)';
                document.querySelector(".col2").style.backgroundColor = 'blue';
                 document.querySelector(".col2").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol3() {
                document.querySelector(".col3").style.animation = 'blueA 400ms linear';
                document.querySelector(".col3").style.transform = 'rotateX(180deg)';
                document.querySelector(".col3").style.backgroundColor = 'blue';
                 document.querySelector(".col3").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol4() {
                document.querySelector(".col4").style.animation = 'blueA 400ms linear';
                document.querySelector(".col4").style.transform = 'rotateX(180deg)';
                document.querySelector(".col4").style.backgroundColor = 'blue';
                 document.querySelector(".col4").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol5() {
                document.querySelector(".col5").style.animation = 'blueA 400ms linear';
                document.querySelector(".col5").style.transform = 'rotateX(180deg)';
                document.querySelector(".col5").style.backgroundColor = 'blue';
                 document.querySelector(".col5").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol1() {
                document.querySelector(".col1").style.animation = 'blueA 400ms linear';
                document.querySelector(".col1").style.transform = 'rotateX(180deg)';
                document.querySelector(".col1").style.backgroundColor = 'blue';
                 document.querySelector(".col1").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol7() {
                document.querySelector(".col7").style.animation = 'blueA 400ms linear';
                document.querySelector(".col7").style.transform = 'rotateX(180deg)';
                document.querySelector(".col7").style.backgroundColor = 'blue';
                 document.querySelector(".col7").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol8() {
                document.querySelector(".col8").style.animation = 'blueA 400ms linear';
                document.querySelector(".col8").style.transform = 'rotateX(180deg)';
                document.querySelector(".col8").style.backgroundColor = 'blue';
                 document.querySelector(".col8").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol9() {
                document.querySelector(".col9").style.animation = 'blueA 400ms linear';
                document.querySelector(".col9").style.transform = 'rotateX(180deg)';
                document.querySelector(".col9").style.backgroundColor = 'blue';
                 document.querySelector(".col9").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol10() {
                document.querySelector(".col10").style.animation = 'blueA 400ms linear';
                document.querySelector(".col10").style.transform = 'rotateX(180deg)';
                document.querySelector(".col10").style.backgroundColor = 'blue';
                 document.querySelector(".col10").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol11() {
                document.querySelector(".col11").style.animation = 'blueA 400ms linear';
                document.querySelector(".col11").style.transform = 'rotateX(180deg)';
                document.querySelector(".col11").style.backgroundColor = 'blue';
                 document.querySelector(".col11").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol12() {
                document.querySelector(".col12").style.animation = 'blueA 400ms linear';
                document.querySelector(".col12").style.transform = 'rotateX(180deg)';
                document.querySelector(".col12").style.backgroundColor = 'blue';
                 document.querySelector(".col12").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol13() {
                document.querySelector(".col13").style.animation = 'blueA 400ms linear';
                document.querySelector(".col13").style.transform = 'rotateX(180deg)';
                document.querySelector(".col13").style.backgroundColor = 'blue';
                 document.querySelector(".col13").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol14() {
                document.querySelector(".col14").style.animation = 'blueA 400ms linear';
                document.querySelector(".col14").style.transform = 'rotateX(180deg)';
                document.querySelector(".col14").style.backgroundColor = 'blue';
                 document.querySelector(".col14").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol15() {
                document.querySelector(".col15").style.animation = 'blueA 400ms linear';
                document.querySelector(".col15").style.transform = 'rotateX(180deg)';
                document.querySelector(".col15").style.backgroundColor = 'blue';
                 document.querySelector(".col15").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol16() {
                document.querySelector(".col16").style.animation = 'blueA 400ms linear';
                document.querySelector(".col16").style.transform = 'rotateX(180deg)';
                document.querySelector(".col16").style.backgroundColor = 'blue';
                 document.querySelector(".col16").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol17() {
                document.querySelector(".col17").style.animation = 'blueA 400ms linear';
                document.querySelector(".col17").style.transform = 'rotateX(180deg)';
                document.querySelector(".col17").style.backgroundColor = 'blue';
                 document.querySelector(".col17").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol18() {
                document.querySelector(".col18").style.animation = 'blueA 400ms linear';
                document.querySelector(".col18").style.transform = 'rotateX(180deg)';
                document.querySelector(".col18").style.backgroundColor = 'blue';
                 document.querySelector(".col18").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol19() {
                document.querySelector(".col19").style.animation = 'blueA 400ms linear';
                document.querySelector(".col19").style.transform = 'rotateX(180deg)';
                document.querySelector(".col19").style.backgroundColor = 'blue';
                 document.querySelector(".col19").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol20() {
                document.querySelector(".col20").style.animation = 'blueA 400ms linear';
                document.querySelector(".col20").style.transform = 'rotateX(180deg)';
                document.querySelector(".col20").style.backgroundColor = 'blue';
                 document.querySelector(".col20").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol21() {
                document.querySelector(".col21").style.animation = 'blueA 400ms linear';
                document.querySelector(".col21").style.transform = 'rotateX(180deg)';
                document.querySelector(".col21").style.backgroundColor = 'blue';
                 document.querySelector(".col21").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol22() {
                document.querySelector(".col22").style.animation = 'blueA 400ms linear';
                document.querySelector(".col22").style.transform = 'rotateX(180deg)';
                document.querySelector(".col22").style.backgroundColor = 'blue';
                 document.querySelector(".col22").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol23() {
                document.querySelector(".col23").style.animation = 'blueA 400ms linear';
                document.querySelector(".col23").style.transform = 'rotateX(180deg)';
                document.querySelector(".col23").style.backgroundColor = 'blue';
                 document.querySelector(".col23").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol24() {
                document.querySelector(".col24").style.animation = 'blueA 400ms linear';
                document.querySelector(".col24").style.transform = 'rotateX(180deg)';
                document.querySelector(".col24").style.backgroundColor = 'blue';
                 document.querySelector(".col24").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol25() {
                document.querySelector(".col25").style.animation = 'blueA 400ms linear';
                document.querySelector(".col25").style.transform = 'rotateX(180deg)';
                document.querySelector(".col25").style.backgroundColor = 'blue';
                 document.querySelector(".col25").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
        }
        else if (me == "pCol7"){
            function pCol7() {
                document.querySelector(".col7").style.animation = 'redA 400ms linear';
                document.querySelector(".col7").style.transform = 'rotateX(180deg)';
                document.querySelector(".col7").style.backgroundColor = 'red';

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp2+"</b><br> Проиграл: <b style='color:red;'>"+inp1+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                } else if(name2 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp1+"</b><br> Проиграл: <b style='color:red;'>"+inp2+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                }
            }
            function pCol2() {
                document.querySelector(".col2").style.animation = 'blueA 400ms linear';
                document.querySelector(".col2").style.transform = 'rotateX(180deg)';
                document.querySelector(".col2").style.backgroundColor = 'blue';
                 document.querySelector(".col2").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol3() {
                document.querySelector(".col3").style.animation = 'blueA 400ms linear';
                document.querySelector(".col3").style.transform = 'rotateX(180deg)';
                document.querySelector(".col3").style.backgroundColor = 'blue';
                 document.querySelector(".col3").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol4() {
                document.querySelector(".col4").style.animation = 'blueA 400ms linear';
                document.querySelector(".col4").style.transform = 'rotateX(180deg)';
                document.querySelector(".col4").style.backgroundColor = 'blue';
                 document.querySelector(".col4").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol5() {
                document.querySelector(".col5").style.animation = 'blueA 400ms linear';
                document.querySelector(".col5").style.transform = 'rotateX(180deg)';
                document.querySelector(".col5").style.backgroundColor = 'blue';
                 document.querySelector(".col5").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol6() {
                document.querySelector(".col6").style.animation = 'blueA 400ms linear';
                document.querySelector(".col6").style.transform = 'rotateX(180deg)';
                document.querySelector(".col6").style.backgroundColor = 'blue';
                 document.querySelector(".col6").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol1() {
                document.querySelector(".col1").style.animation = 'blueA 400ms linear';
                document.querySelector(".col1").style.transform = 'rotateX(180deg)';
                document.querySelector(".col1").style.backgroundColor = 'blue';
                 document.querySelector(".col1").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol8() {
                document.querySelector(".col8").style.animation = 'blueA 400ms linear';
                document.querySelector(".col8").style.transform = 'rotateX(180deg)';
                document.querySelector(".col8").style.backgroundColor = 'blue';
                 document.querySelector(".col8").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol9() {
                document.querySelector(".col9").style.animation = 'blueA 400ms linear';
                document.querySelector(".col9").style.transform = 'rotateX(180deg)';
                document.querySelector(".col9").style.backgroundColor = 'blue';
                 document.querySelector(".col9").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol10() {
                document.querySelector(".col10").style.animation = 'blueA 400ms linear';
                document.querySelector(".col10").style.transform = 'rotateX(180deg)';
                document.querySelector(".col10").style.backgroundColor = 'blue';
                 document.querySelector(".col10").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol11() {
                document.querySelector(".col11").style.animation = 'blueA 400ms linear';
                document.querySelector(".col11").style.transform = 'rotateX(180deg)';
                document.querySelector(".col11").style.backgroundColor = 'blue';
                 document.querySelector(".col11").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol12() {
                document.querySelector(".col12").style.animation = 'blueA 400ms linear';
                document.querySelector(".col12").style.transform = 'rotateX(180deg)';
                document.querySelector(".col12").style.backgroundColor = 'blue';
                 document.querySelector(".col12").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol13() {
                document.querySelector(".col13").style.animation = 'blueA 400ms linear';
                document.querySelector(".col13").style.transform = 'rotateX(180deg)';
                document.querySelector(".col13").style.backgroundColor = 'blue';
                 document.querySelector(".col13").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol14() {
                document.querySelector(".col14").style.animation = 'blueA 400ms linear';
                document.querySelector(".col14").style.transform = 'rotateX(180deg)';
                document.querySelector(".col14").style.backgroundColor = 'blue';
                 document.querySelector(".col14").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol15() {
                document.querySelector(".col15").style.animation = 'blueA 400ms linear';
                document.querySelector(".col15").style.transform = 'rotateX(180deg)';
                document.querySelector(".col15").style.backgroundColor = 'blue';
                 document.querySelector(".col15").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol16() {
                document.querySelector(".col16").style.animation = 'blueA 400ms linear';
                document.querySelector(".col16").style.transform = 'rotateX(180deg)';
                document.querySelector(".col16").style.backgroundColor = 'blue';
                 document.querySelector(".col16").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol17() {
                document.querySelector(".col17").style.animation = 'blueA 400ms linear';
                document.querySelector(".col17").style.transform = 'rotateX(180deg)';
                document.querySelector(".col17").style.backgroundColor = 'blue';
                 document.querySelector(".col17").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol18() {
                document.querySelector(".col18").style.animation = 'blueA 400ms linear';
                document.querySelector(".col18").style.transform = 'rotateX(180deg)';
                document.querySelector(".col18").style.backgroundColor = 'blue';
                 document.querySelector(".col18").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol19() {
                document.querySelector(".col19").style.animation = 'blueA 400ms linear';
                document.querySelector(".col19").style.transform = 'rotateX(180deg)';
                document.querySelector(".col19").style.backgroundColor = 'blue';
                 document.querySelector(".col19").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol20() {
                document.querySelector(".col20").style.animation = 'blueA 400ms linear';
                document.querySelector(".col20").style.transform = 'rotateX(180deg)';
                document.querySelector(".col20").style.backgroundColor = 'blue';
                 document.querySelector(".col20").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol21() {
                document.querySelector(".col21").style.animation = 'blueA 400ms linear';
                document.querySelector(".col21").style.transform = 'rotateX(180deg)';
                document.querySelector(".col21").style.backgroundColor = 'blue';
                 document.querySelector(".col21").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol22() {
                document.querySelector(".col22").style.animation = 'blueA 400ms linear';
                document.querySelector(".col22").style.transform = 'rotateX(180deg)';
                document.querySelector(".col22").style.backgroundColor = 'blue';
                 document.querySelector(".col22").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol23() {
                document.querySelector(".col23").style.animation = 'blueA 400ms linear';
                document.querySelector(".col23").style.transform = 'rotateX(180deg)';
                document.querySelector(".col23").style.backgroundColor = 'blue';
                 document.querySelector(".col23").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol24() {
                document.querySelector(".col24").style.animation = 'blueA 400ms linear';
                document.querySelector(".col24").style.transform = 'rotateX(180deg)';
                document.querySelector(".col24").style.backgroundColor = 'blue';
                 document.querySelector(".col24").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol25() {
                document.querySelector(".col25").style.animation = 'blueA 400ms linear';
                document.querySelector(".col25").style.transform = 'rotateX(180deg)';
                document.querySelector(".col25").style.backgroundColor = 'blue';
                 document.querySelector(".col25").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
        }
        else if (me == "pCol8"){
            function pCol8() {
                document.querySelector(".col8").style.animation = 'redA 400ms linear';
                document.querySelector(".col8").style.transform = 'rotateX(180deg)';
                document.querySelector(".col8").style.backgroundColor = 'red';

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp2+"</b><br> Проиграл: <b style='color:red;'>"+inp1+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                } else if(name2 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp1+"</b><br> Проиграл: <b style='color:red;'>"+inp2+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                }
            }
            function pCol2() {
                document.querySelector(".col2").style.animation = 'blueA 400ms linear';
                document.querySelector(".col2").style.transform = 'rotateX(180deg)';
                document.querySelector(".col2").style.backgroundColor = 'blue';
                 document.querySelector(".col2").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol3() {
                document.querySelector(".col3").style.animation = 'blueA 400ms linear';
                document.querySelector(".col3").style.transform = 'rotateX(180deg)';
                document.querySelector(".col3").style.backgroundColor = 'blue';
                 document.querySelector(".col3").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol4() {
                document.querySelector(".col4").style.animation = 'blueA 400ms linear';
                document.querySelector(".col4").style.transform = 'rotateX(180deg)';
                document.querySelector(".col4").style.backgroundColor = 'blue';
                 document.querySelector(".col4").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol5() {
                document.querySelector(".col5").style.animation = 'blueA 400ms linear';
                document.querySelector(".col5").style.transform = 'rotateX(180deg)';
                document.querySelector(".col5").style.backgroundColor = 'blue';
                 document.querySelector(".col5").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol6() {
                document.querySelector(".col6").style.animation = 'blueA 400ms linear';
                document.querySelector(".col6").style.transform = 'rotateX(180deg)';
                document.querySelector(".col6").style.backgroundColor = 'blue';
                 document.querySelector(".col6").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol7() {
                document.querySelector(".col7").style.animation = 'blueA 400ms linear';
                document.querySelector(".col7").style.transform = 'rotateX(180deg)';
                document.querySelector(".col7").style.backgroundColor = 'blue';
                 document.querySelector(".col7").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol1() {
                document.querySelector(".col1").style.animation = 'blueA 400ms linear';
                document.querySelector(".col1").style.transform = 'rotateX(180deg)';
                document.querySelector(".col1").style.backgroundColor = 'blue';
                 document.querySelector(".col1").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol9() {
                document.querySelector(".col9").style.animation = 'blueA 400ms linear';
                document.querySelector(".col9").style.transform = 'rotateX(180deg)';
                document.querySelector(".col9").style.backgroundColor = 'blue';
                 document.querySelector(".col9").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol10() {
                document.querySelector(".col10").style.animation = 'blueA 400ms linear';
                document.querySelector(".col10").style.transform = 'rotateX(180deg)';
                document.querySelector(".col10").style.backgroundColor = 'blue';
                 document.querySelector(".col10").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol11() {
                document.querySelector(".col11").style.animation = 'blueA 400ms linear';
                document.querySelector(".col11").style.transform = 'rotateX(180deg)';
                document.querySelector(".col11").style.backgroundColor = 'blue';
                 document.querySelector(".col11").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol12() {
                document.querySelector(".col12").style.animation = 'blueA 400ms linear';
                document.querySelector(".col12").style.transform = 'rotateX(180deg)';
                document.querySelector(".col12").style.backgroundColor = 'blue';
                 document.querySelector(".col12").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol13() {
                document.querySelector(".col13").style.animation = 'blueA 400ms linear';
                document.querySelector(".col13").style.transform = 'rotateX(180deg)';
                document.querySelector(".col13").style.backgroundColor = 'blue';
                 document.querySelector(".col13").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol14() {
                document.querySelector(".col14").style.animation = 'blueA 400ms linear';
                document.querySelector(".col14").style.transform = 'rotateX(180deg)';
                document.querySelector(".col14").style.backgroundColor = 'blue';
                 document.querySelector(".col14").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol15() {
                document.querySelector(".col15").style.animation = 'blueA 400ms linear';
                document.querySelector(".col15").style.transform = 'rotateX(180deg)';
                document.querySelector(".col15").style.backgroundColor = 'blue';
                 document.querySelector(".col15").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol16() {
                document.querySelector(".col16").style.animation = 'blueA 400ms linear';
                document.querySelector(".col16").style.transform = 'rotateX(180deg)';
                document.querySelector(".col16").style.backgroundColor = 'blue';
                 document.querySelector(".col16").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol17() {
                document.querySelector(".col17").style.animation = 'blueA 400ms linear';
                document.querySelector(".col17").style.transform = 'rotateX(180deg)';
                document.querySelector(".col17").style.backgroundColor = 'blue';
                 document.querySelector(".col17").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol18() {
                document.querySelector(".col18").style.animation = 'blueA 400ms linear';
                document.querySelector(".col18").style.transform = 'rotateX(180deg)';
                document.querySelector(".col18").style.backgroundColor = 'blue';
                 document.querySelector(".col18").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol19() {
                document.querySelector(".col19").style.animation = 'blueA 400ms linear';
                document.querySelector(".col19").style.transform = 'rotateX(180deg)';
                document.querySelector(".col19").style.backgroundColor = 'blue';
                 document.querySelector(".col19").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol20() {
                document.querySelector(".col20").style.animation = 'blueA 400ms linear';
                document.querySelector(".col20").style.transform = 'rotateX(180deg)';
                document.querySelector(".col20").style.backgroundColor = 'blue';
                 document.querySelector(".col20").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol21() {
                document.querySelector(".col21").style.animation = 'blueA 400ms linear';
                document.querySelector(".col21").style.transform = 'rotateX(180deg)';
                document.querySelector(".col21").style.backgroundColor = 'blue';
                 document.querySelector(".col21").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol22() {
                document.querySelector(".col22").style.animation = 'blueA 400ms linear';
                document.querySelector(".col22").style.transform = 'rotateX(180deg)';
                document.querySelector(".col22").style.backgroundColor = 'blue';
                 document.querySelector(".col22").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol23() {
                document.querySelector(".col23").style.animation = 'blueA 400ms linear';
                document.querySelector(".col23").style.transform = 'rotateX(180deg)';
                document.querySelector(".col23").style.backgroundColor = 'blue';
                 document.querySelector(".col23").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol24() {
                document.querySelector(".col24").style.animation = 'blueA 400ms linear';
                document.querySelector(".col24").style.transform = 'rotateX(180deg)';
                document.querySelector(".col24").style.backgroundColor = 'blue';
                 document.querySelector(".col24").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol25() {
                document.querySelector(".col25").style.animation = 'blueA 400ms linear';
                document.querySelector(".col25").style.transform = 'rotateX(180deg)';
                document.querySelector(".col25").style.backgroundColor = 'blue';
                 document.querySelector(".col25").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
        }
        else if (me == "pCol9"){
            function pCol9() {
                document.querySelector(".col9").style.animation = 'redA 400ms linear';
                document.querySelector(".col9").style.transform = 'rotateX(180deg)';
                document.querySelector(".col9").style.backgroundColor = 'red';

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp2+"</b><br> Проиграл: <b style='color:red;'>"+inp1+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                } else if(name2 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp1+"</b><br> Проиграл: <b style='color:red;'>"+inp2+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                }
            }
            function pCol2() {
                document.querySelector(".col2").style.animation = 'blueA 400ms linear';
                document.querySelector(".col2").style.transform = 'rotateX(180deg)';
                document.querySelector(".col2").style.backgroundColor = 'blue';
                 document.querySelector(".col2").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol3() {
                document.querySelector(".col3").style.animation = 'blueA 400ms linear';
                document.querySelector(".col3").style.transform = 'rotateX(180deg)';
                document.querySelector(".col3").style.backgroundColor = 'blue';
                 document.querySelector(".col3").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol4() {
                document.querySelector(".col4").style.animation = 'blueA 400ms linear';
                document.querySelector(".col4").style.transform = 'rotateX(180deg)';
                document.querySelector(".col4").style.backgroundColor = 'blue';
                 document.querySelector(".col4").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol5() {
                document.querySelector(".col5").style.animation = 'blueA 400ms linear';
                document.querySelector(".col5").style.transform = 'rotateX(180deg)';
                document.querySelector(".col5").style.backgroundColor = 'blue';
                 document.querySelector(".col5").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol6() {
                document.querySelector(".col6").style.animation = 'blueA 400ms linear';
                document.querySelector(".col6").style.transform = 'rotateX(180deg)';
                document.querySelector(".col6").style.backgroundColor = 'blue';
                 document.querySelector(".col6").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol7() {
                document.querySelector(".col7").style.animation = 'blueA 400ms linear';
                document.querySelector(".col7").style.transform = 'rotateX(180deg)';
                document.querySelector(".col7").style.backgroundColor = 'blue';
                 document.querySelector(".col7").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol8() {
                document.querySelector(".col8").style.animation = 'blueA 400ms linear';
                document.querySelector(".col8").style.transform = 'rotateX(180deg)';
                document.querySelector(".col8").style.backgroundColor = 'blue';
                 document.querySelector(".col8").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol1() {
                document.querySelector(".col1").style.animation = 'blueA 400ms linear';
                document.querySelector(".col1").style.transform = 'rotateX(180deg)';
                document.querySelector(".col1").style.backgroundColor = 'blue';
                 document.querySelector(".col1").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol10() {
                document.querySelector(".col10").style.animation = 'blueA 400ms linear';
                document.querySelector(".col10").style.transform = 'rotateX(180deg)';
                document.querySelector(".col10").style.backgroundColor = 'blue';
                 document.querySelector(".col10").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol11() {
                document.querySelector(".col11").style.animation = 'blueA 400ms linear';
                document.querySelector(".col11").style.transform = 'rotateX(180deg)';
                document.querySelector(".col11").style.backgroundColor = 'blue';
                 document.querySelector(".col11").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol12() {
                document.querySelector(".col12").style.animation = 'blueA 400ms linear';
                document.querySelector(".col12").style.transform = 'rotateX(180deg)';
                document.querySelector(".col12").style.backgroundColor = 'blue';
                 document.querySelector(".col12").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol13() {
                document.querySelector(".col13").style.animation = 'blueA 400ms linear';
                document.querySelector(".col13").style.transform = 'rotateX(180deg)';
                document.querySelector(".col13").style.backgroundColor = 'blue';
                 document.querySelector(".col13").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol14() {
                document.querySelector(".col14").style.animation = 'blueA 400ms linear';
                document.querySelector(".col14").style.transform = 'rotateX(180deg)';
                document.querySelector(".col14").style.backgroundColor = 'blue';
                 document.querySelector(".col14").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol15() {
                document.querySelector(".col15").style.animation = 'blueA 400ms linear';
                document.querySelector(".col15").style.transform = 'rotateX(180deg)';
                document.querySelector(".col15").style.backgroundColor = 'blue';
                 document.querySelector(".col15").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol16() {
                document.querySelector(".col16").style.animation = 'blueA 400ms linear';
                document.querySelector(".col16").style.transform = 'rotateX(180deg)';
                document.querySelector(".col16").style.backgroundColor = 'blue';
                 document.querySelector(".col16").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol17() {
                document.querySelector(".col17").style.animation = 'blueA 400ms linear';
                document.querySelector(".col17").style.transform = 'rotateX(180deg)';
                document.querySelector(".col17").style.backgroundColor = 'blue';
                 document.querySelector(".col17").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol18() {
                document.querySelector(".col18").style.animation = 'blueA 400ms linear';
                document.querySelector(".col18").style.transform = 'rotateX(180deg)';
                document.querySelector(".col18").style.backgroundColor = 'blue';
                 document.querySelector(".col18").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol19() {
                document.querySelector(".col19").style.animation = 'blueA 400ms linear';
                document.querySelector(".col19").style.transform = 'rotateX(180deg)';
                document.querySelector(".col19").style.backgroundColor = 'blue';
                 document.querySelector(".col19").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol20() {
                document.querySelector(".col20").style.animation = 'blueA 400ms linear';
                document.querySelector(".col20").style.transform = 'rotateX(180deg)';
                document.querySelector(".col20").style.backgroundColor = 'blue';
                 document.querySelector(".col20").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol21() {
                document.querySelector(".col21").style.animation = 'blueA 400ms linear';
                document.querySelector(".col21").style.transform = 'rotateX(180deg)';
                document.querySelector(".col21").style.backgroundColor = 'blue';
                 document.querySelector(".col21").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol22() {
                document.querySelector(".col22").style.animation = 'blueA 400ms linear';
                document.querySelector(".col22").style.transform = 'rotateX(180deg)';
                document.querySelector(".col22").style.backgroundColor = 'blue';
                 document.querySelector(".col22").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol23() {
                document.querySelector(".col23").style.animation = 'blueA 400ms linear';
                document.querySelector(".col23").style.transform = 'rotateX(180deg)';
                document.querySelector(".col23").style.backgroundColor = 'blue';
                 document.querySelector(".col23").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol24() {
                document.querySelector(".col24").style.animation = 'blueA 400ms linear';
                document.querySelector(".col24").style.transform = 'rotateX(180deg)';
                document.querySelector(".col24").style.backgroundColor = 'blue';
                 document.querySelector(".col24").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol25() {
                document.querySelector(".col25").style.animation = 'blueA 400ms linear';
                document.querySelector(".col25").style.transform = 'rotateX(180deg)';
                document.querySelector(".col25").style.backgroundColor = 'blue';
                 document.querySelector(".col25").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
        }
        else if (me == "pCol10"){
            function pCol10() {
                document.querySelector(".col10").style.animation = 'redA 400ms linear';
                document.querySelector(".col10").style.transform = 'rotateX(180deg)';
                document.querySelector(".col10").style.backgroundColor = 'red';

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp2+"</b><br> Проиграл: <b style='color:red;'>"+inp1+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                } else if(name2 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp1+"</b><br> Проиграл: <b style='color:red;'>"+inp2+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                }
            }
            function pCol2() {
                document.querySelector(".col2").style.animation = 'blueA 400ms linear';
                document.querySelector(".col2").style.transform = 'rotateX(180deg)';
                document.querySelector(".col2").style.backgroundColor = 'blue';
                 document.querySelector(".col2").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol3() {
                document.querySelector(".col3").style.animation = 'blueA 400ms linear';
                document.querySelector(".col3").style.transform = 'rotateX(180deg)';
                document.querySelector(".col3").style.backgroundColor = 'blue';
                 document.querySelector(".col3").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol4() {
                document.querySelector(".col4").style.animation = 'blueA 400ms linear';
                document.querySelector(".col4").style.transform = 'rotateX(180deg)';
                document.querySelector(".col4").style.backgroundColor = 'blue';
                 document.querySelector(".col4").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol5() {
                document.querySelector(".col5").style.animation = 'blueA 400ms linear';
                document.querySelector(".col5").style.transform = 'rotateX(180deg)';
                document.querySelector(".col5").style.backgroundColor = 'blue';
                 document.querySelector(".col5").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol6() {
                document.querySelector(".col6").style.animation = 'blueA 400ms linear';
                document.querySelector(".col6").style.transform = 'rotateX(180deg)';
                document.querySelector(".col6").style.backgroundColor = 'blue';
                 document.querySelector(".col6").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol7() {
                document.querySelector(".col7").style.animation = 'blueA 400ms linear';
                document.querySelector(".col7").style.transform = 'rotateX(180deg)';
                document.querySelector(".col7").style.backgroundColor = 'blue';
                 document.querySelector(".col7").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol8() {
                document.querySelector(".col8").style.animation = 'blueA 400ms linear';
                document.querySelector(".col8").style.transform = 'rotateX(180deg)';
                document.querySelector(".col8").style.backgroundColor = 'blue';
                 document.querySelector(".col8").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol9() {
                document.querySelector(".col9").style.animation = 'blueA 400ms linear';
                document.querySelector(".col9").style.transform = 'rotateX(180deg)';
                document.querySelector(".col9").style.backgroundColor = 'blue';
                 document.querySelector(".col9").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol1() {
                document.querySelector(".col1").style.animation = 'blueA 400ms linear';
                document.querySelector(".col1").style.transform = 'rotateX(180deg)';
                document.querySelector(".col1").style.backgroundColor = 'blue';
                 document.querySelector(".col1").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol11() {
                document.querySelector(".col11").style.animation = 'blueA 400ms linear';
                document.querySelector(".col11").style.transform = 'rotateX(180deg)';
                document.querySelector(".col11").style.backgroundColor = 'blue';
                 document.querySelector(".col11").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol12() {
                document.querySelector(".col12").style.animation = 'blueA 400ms linear';
                document.querySelector(".col12").style.transform = 'rotateX(180deg)';
                document.querySelector(".col12").style.backgroundColor = 'blue';
                 document.querySelector(".col12").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol13() {
                document.querySelector(".col13").style.animation = 'blueA 400ms linear';
                document.querySelector(".col13").style.transform = 'rotateX(180deg)';
                document.querySelector(".col13").style.backgroundColor = 'blue';
                 document.querySelector(".col13").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol14() {
                document.querySelector(".col14").style.animation = 'blueA 400ms linear';
                document.querySelector(".col14").style.transform = 'rotateX(180deg)';
                document.querySelector(".col14").style.backgroundColor = 'blue';
                 document.querySelector(".col14").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol15() {
                document.querySelector(".col15").style.animation = 'blueA 400ms linear';
                document.querySelector(".col15").style.transform = 'rotateX(180deg)';
                document.querySelector(".col15").style.backgroundColor = 'blue';
                 document.querySelector(".col15").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol16() {
                document.querySelector(".col16").style.animation = 'blueA 400ms linear';
                document.querySelector(".col16").style.transform = 'rotateX(180deg)';
                document.querySelector(".col16").style.backgroundColor = 'blue';
                 document.querySelector(".col16").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol17() {
                document.querySelector(".col17").style.animation = 'blueA 400ms linear';
                document.querySelector(".col17").style.transform = 'rotateX(180deg)';
                document.querySelector(".col17").style.backgroundColor = 'blue';
                 document.querySelector(".col17").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol18() {
                document.querySelector(".col18").style.animation = 'blueA 400ms linear';
                document.querySelector(".col18").style.transform = 'rotateX(180deg)';
                document.querySelector(".col18").style.backgroundColor = 'blue';
                 document.querySelector(".col18").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol19() {
                document.querySelector(".col19").style.animation = 'blueA 400ms linear';
                document.querySelector(".col19").style.transform = 'rotateX(180deg)';
                document.querySelector(".col19").style.backgroundColor = 'blue';
                 document.querySelector(".col19").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol20() {
                document.querySelector(".col20").style.animation = 'blueA 400ms linear';
                document.querySelector(".col20").style.transform = 'rotateX(180deg)';
                document.querySelector(".col20").style.backgroundColor = 'blue';
                 document.querySelector(".col20").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol21() {
                document.querySelector(".col21").style.animation = 'blueA 400ms linear';
                document.querySelector(".col21").style.transform = 'rotateX(180deg)';
                document.querySelector(".col21").style.backgroundColor = 'blue';
                 document.querySelector(".col21").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol22() {
                document.querySelector(".col22").style.animation = 'blueA 400ms linear';
                document.querySelector(".col22").style.transform = 'rotateX(180deg)';
                document.querySelector(".col22").style.backgroundColor = 'blue';
                 document.querySelector(".col22").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol23() {
                document.querySelector(".col23").style.animation = 'blueA 400ms linear';
                document.querySelector(".col23").style.transform = 'rotateX(180deg)';
                document.querySelector(".col23").style.backgroundColor = 'blue';
                 document.querySelector(".col23").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol24() {
                document.querySelector(".col24").style.animation = 'blueA 400ms linear';
                document.querySelector(".col24").style.transform = 'rotateX(180deg)';
                document.querySelector(".col24").style.backgroundColor = 'blue';
                 document.querySelector(".col24").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol25() {
                document.querySelector(".col25").style.animation = 'blueA 400ms linear';
                document.querySelector(".col25").style.transform = 'rotateX(180deg)';
                document.querySelector(".col25").style.backgroundColor = 'blue';
                 document.querySelector(".col25").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
        }
        else if (me == "pCol11"){
            function pCol11() {
                document.querySelector(".col11").style.animation = 'redA 400ms linear';
                document.querySelector(".col11").style.transform = 'rotateX(180deg)';
                document.querySelector(".col11").style.backgroundColor = 'red';

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp2+"</b><br> Проиграл: <b style='color:red;'>"+inp1+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                } else if(name2 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp1+"</b><br> Проиграл: <b style='color:red;'>"+inp2+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                }
            }
            function pCol2() {
                document.querySelector(".col2").style.animation = 'blueA 400ms linear';
                document.querySelector(".col2").style.transform = 'rotateX(180deg)';
                document.querySelector(".col2").style.backgroundColor = 'blue';
                 document.querySelector(".col2").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol3() {
                document.querySelector(".col3").style.animation = 'blueA 400ms linear';
                document.querySelector(".col3").style.transform = 'rotateX(180deg)';
                document.querySelector(".col3").style.backgroundColor = 'blue';
                 document.querySelector(".col3").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol4() {
                document.querySelector(".col4").style.animation = 'blueA 400ms linear';
                document.querySelector(".col4").style.transform = 'rotateX(180deg)';
                document.querySelector(".col4").style.backgroundColor = 'blue';
                 document.querySelector(".col4").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol5() {
                document.querySelector(".col5").style.animation = 'blueA 400ms linear';
                document.querySelector(".col5").style.transform = 'rotateX(180deg)';
                document.querySelector(".col5").style.backgroundColor = 'blue';
                 document.querySelector(".col5").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol6() {
                document.querySelector(".col6").style.animation = 'blueA 400ms linear';
                document.querySelector(".col6").style.transform = 'rotateX(180deg)';
                document.querySelector(".col6").style.backgroundColor = 'blue';
                 document.querySelector(".col6").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol7() {
                document.querySelector(".col7").style.animation = 'blueA 400ms linear';
                document.querySelector(".col7").style.transform = 'rotateX(180deg)';
                document.querySelector(".col7").style.backgroundColor = 'blue';
                 document.querySelector(".col7").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol8() {
                document.querySelector(".col8").style.animation = 'blueA 400ms linear';
                document.querySelector(".col8").style.transform = 'rotateX(180deg)';
                document.querySelector(".col8").style.backgroundColor = 'blue';
                 document.querySelector(".col8").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol9() {
                document.querySelector(".col9").style.animation = 'blueA 400ms linear';
                document.querySelector(".col9").style.transform = 'rotateX(180deg)';
                document.querySelector(".col9").style.backgroundColor = 'blue';
                 document.querySelector(".col9").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol10() {
                document.querySelector(".col10").style.animation = 'blueA 400ms linear';
                document.querySelector(".col10").style.transform = 'rotateX(180deg)';
                document.querySelector(".col10").style.backgroundColor = 'blue';
                 document.querySelector(".col10").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol1() {
                document.querySelector(".col1").style.animation = 'blueA 400ms linear';
                document.querySelector(".col1").style.transform = 'rotateX(180deg)';
                document.querySelector(".col1").style.backgroundColor = 'blue';
                 document.querySelector(".col1").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol12() {
                document.querySelector(".col12").style.animation = 'blueA 400ms linear';
                document.querySelector(".col12").style.transform = 'rotateX(180deg)';
                document.querySelector(".col12").style.backgroundColor = 'blue';
                 document.querySelector(".col12").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol13() {
                document.querySelector(".col13").style.animation = 'blueA 400ms linear';
                document.querySelector(".col13").style.transform = 'rotateX(180deg)';
                document.querySelector(".col13").style.backgroundColor = 'blue';
                 document.querySelector(".col13").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol14() {
                document.querySelector(".col14").style.animation = 'blueA 400ms linear';
                document.querySelector(".col14").style.transform = 'rotateX(180deg)';
                document.querySelector(".col14").style.backgroundColor = 'blue';
                 document.querySelector(".col14").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol15() {
                document.querySelector(".col15").style.animation = 'blueA 400ms linear';
                document.querySelector(".col15").style.transform = 'rotateX(180deg)';
                document.querySelector(".col15").style.backgroundColor = 'blue';
                 document.querySelector(".col15").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol16() {
                document.querySelector(".col16").style.animation = 'blueA 400ms linear';
                document.querySelector(".col16").style.transform = 'rotateX(180deg)';
                document.querySelector(".col16").style.backgroundColor = 'blue';
                 document.querySelector(".col16").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol17() {
                document.querySelector(".col17").style.animation = 'blueA 400ms linear';
                document.querySelector(".col17").style.transform = 'rotateX(180deg)';
                document.querySelector(".col17").style.backgroundColor = 'blue';
                 document.querySelector(".col17").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol18() {
                document.querySelector(".col18").style.animation = 'blueA 400ms linear';
                document.querySelector(".col18").style.transform = 'rotateX(180deg)';
                document.querySelector(".col18").style.backgroundColor = 'blue';
                 document.querySelector(".col18").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol19() {
                document.querySelector(".col19").style.animation = 'blueA 400ms linear';
                document.querySelector(".col19").style.transform = 'rotateX(180deg)';
                document.querySelector(".col19").style.backgroundColor = 'blue';
                 document.querySelector(".col19").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol20() {
                document.querySelector(".col20").style.animation = 'blueA 400ms linear';
                document.querySelector(".col20").style.transform = 'rotateX(180deg)';
                document.querySelector(".col20").style.backgroundColor = 'blue';
                 document.querySelector(".col20").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol21() {
                document.querySelector(".col21").style.animation = 'blueA 400ms linear';
                document.querySelector(".col21").style.transform = 'rotateX(180deg)';
                document.querySelector(".col21").style.backgroundColor = 'blue';
                 document.querySelector(".col21").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol22() {
                document.querySelector(".col22").style.animation = 'blueA 400ms linear';
                document.querySelector(".col22").style.transform = 'rotateX(180deg)';
                document.querySelector(".col22").style.backgroundColor = 'blue';
                 document.querySelector(".col22").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol23() {
                document.querySelector(".col23").style.animation = 'blueA 400ms linear';
                document.querySelector(".col23").style.transform = 'rotateX(180deg)';
                document.querySelector(".col23").style.backgroundColor = 'blue';
                 document.querySelector(".col23").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol24() {
                document.querySelector(".col24").style.animation = 'blueA 400ms linear';
                document.querySelector(".col24").style.transform = 'rotateX(180deg)';
                document.querySelector(".col24").style.backgroundColor = 'blue';
                 document.querySelector(".col24").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol25() {
                document.querySelector(".col25").style.animation = 'blueA 400ms linear';
                document.querySelector(".col25").style.transform = 'rotateX(180deg)';
                document.querySelector(".col25").style.backgroundColor = 'blue';
                 document.querySelector(".col25").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
        }
        else if (me == "pCol12"){
            function pCol12() {
                document.querySelector(".col12").style.animation = 'redA 400ms linear';
                document.querySelector(".col12").style.transform = 'rotateX(180deg)';
                document.querySelector(".col12").style.backgroundColor = 'red';

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp2+"</b><br> Проиграл: <b style='color:red;'>"+inp1+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                } else if(name2 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp1+"</b><br> Проиграл: <b style='color:red;'>"+inp2+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                }
            }
            function pCol2() {
                document.querySelector(".col2").style.animation = 'blueA 400ms linear';
                document.querySelector(".col2").style.transform = 'rotateX(180deg)';
                document.querySelector(".col2").style.backgroundColor = 'blue';
                 document.querySelector(".col2").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol3() {
                document.querySelector(".col3").style.animation = 'blueA 400ms linear';
                document.querySelector(".col3").style.transform = 'rotateX(180deg)';
                document.querySelector(".col3").style.backgroundColor = 'blue';
                 document.querySelector(".col3").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol4() {
                document.querySelector(".col4").style.animation = 'blueA 400ms linear';
                document.querySelector(".col4").style.transform = 'rotateX(180deg)';
                document.querySelector(".col4").style.backgroundColor = 'blue';
                 document.querySelector(".col4").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol5() {
                document.querySelector(".col5").style.animation = 'blueA 400ms linear';
                document.querySelector(".col5").style.transform = 'rotateX(180deg)';
                document.querySelector(".col5").style.backgroundColor = 'blue';
                 document.querySelector(".col5").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol6() {
                document.querySelector(".col6").style.animation = 'blueA 400ms linear';
                document.querySelector(".col6").style.transform = 'rotateX(180deg)';
                document.querySelector(".col6").style.backgroundColor = 'blue';
                 document.querySelector(".col6").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol7() {
                document.querySelector(".col7").style.animation = 'blueA 400ms linear';
                document.querySelector(".col7").style.transform = 'rotateX(180deg)';
                document.querySelector(".col7").style.backgroundColor = 'blue';
                 document.querySelector(".col7").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol8() {
                document.querySelector(".col8").style.animation = 'blueA 400ms linear';
                document.querySelector(".col8").style.transform = 'rotateX(180deg)';
                document.querySelector(".col8").style.backgroundColor = 'blue';
                 document.querySelector(".col8").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol9() {
                document.querySelector(".col9").style.animation = 'blueA 400ms linear';
                document.querySelector(".col9").style.transform = 'rotateX(180deg)';
                document.querySelector(".col9").style.backgroundColor = 'blue';
                 document.querySelector(".col9").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol10() {
                document.querySelector(".col10").style.animation = 'blueA 400ms linear';
                document.querySelector(".col10").style.transform = 'rotateX(180deg)';
                document.querySelector(".col10").style.backgroundColor = 'blue';
                 document.querySelector(".col10").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol11() {
                document.querySelector(".col11").style.animation = 'blueA 400ms linear';
                document.querySelector(".col11").style.transform = 'rotateX(180deg)';
                document.querySelector(".col11").style.backgroundColor = 'blue';
                 document.querySelector(".col11").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol1() {
                document.querySelector(".col1").style.animation = 'blueA 400ms linear';
                document.querySelector(".col1").style.transform = 'rotateX(180deg)';
                document.querySelector(".col1").style.backgroundColor = 'blue';
                 document.querySelector(".col1").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol13() {
                document.querySelector(".col13").style.animation = 'blueA 400ms linear';
                document.querySelector(".col13").style.transform = 'rotateX(180deg)';
                document.querySelector(".col13").style.backgroundColor = 'blue';
                 document.querySelector(".col13").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol14() {
                document.querySelector(".col14").style.animation = 'blueA 400ms linear';
                document.querySelector(".col14").style.transform = 'rotateX(180deg)';
                document.querySelector(".col14").style.backgroundColor = 'blue';
                 document.querySelector(".col14").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol15() {
                document.querySelector(".col15").style.animation = 'blueA 400ms linear';
                document.querySelector(".col15").style.transform = 'rotateX(180deg)';
                document.querySelector(".col15").style.backgroundColor = 'blue';
                 document.querySelector(".col15").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol16() {
                document.querySelector(".col16").style.animation = 'blueA 400ms linear';
                document.querySelector(".col16").style.transform = 'rotateX(180deg)';
                document.querySelector(".col16").style.backgroundColor = 'blue';
                 document.querySelector(".col16").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol17() {
                document.querySelector(".col17").style.animation = 'blueA 400ms linear';
                document.querySelector(".col17").style.transform = 'rotateX(180deg)';
                document.querySelector(".col17").style.backgroundColor = 'blue';
                 document.querySelector(".col17").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol18() {
                document.querySelector(".col18").style.animation = 'blueA 400ms linear';
                document.querySelector(".col18").style.transform = 'rotateX(180deg)';
                document.querySelector(".col18").style.backgroundColor = 'blue';
                 document.querySelector(".col18").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol19() {
                document.querySelector(".col19").style.animation = 'blueA 400ms linear';
                document.querySelector(".col19").style.transform = 'rotateX(180deg)';
                document.querySelector(".col19").style.backgroundColor = 'blue';
                 document.querySelector(".col19").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol20() {
                document.querySelector(".col20").style.animation = 'blueA 400ms linear';
                document.querySelector(".col20").style.transform = 'rotateX(180deg)';
                document.querySelector(".col20").style.backgroundColor = 'blue';
                 document.querySelector(".col20").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol21() {
                document.querySelector(".col21").style.animation = 'blueA 400ms linear';
                document.querySelector(".col21").style.transform = 'rotateX(180deg)';
                document.querySelector(".col21").style.backgroundColor = 'blue';
                 document.querySelector(".col21").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol22() {
                document.querySelector(".col22").style.animation = 'blueA 400ms linear';
                document.querySelector(".col22").style.transform = 'rotateX(180deg)';
                document.querySelector(".col22").style.backgroundColor = 'blue';
                 document.querySelector(".col22").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol23() {
                document.querySelector(".col23").style.animation = 'blueA 400ms linear';
                document.querySelector(".col23").style.transform = 'rotateX(180deg)';
                document.querySelector(".col23").style.backgroundColor = 'blue';
                 document.querySelector(".col23").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol24() {
                document.querySelector(".col24").style.animation = 'blueA 400ms linear';
                document.querySelector(".col24").style.transform = 'rotateX(180deg)';
                document.querySelector(".col24").style.backgroundColor = 'blue';
                 document.querySelector(".col24").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol25() {
                document.querySelector(".col25").style.animation = 'blueA 400ms linear';
                document.querySelector(".col25").style.transform = 'rotateX(180deg)';
                document.querySelector(".col25").style.backgroundColor = 'blue';
                 document.querySelector(".col25").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
        }
        else if (me == "pCol13"){
            function pCol13() {
                document.querySelector(".col13").style.animation = 'redA 400ms linear';
                document.querySelector(".col13").style.transform = 'rotateX(180deg)';
                document.querySelector(".col13").style.backgroundColor = 'red';

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp2+"</b><br> Проиграл: <b style='color:red;'>"+inp1+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                } else if(name2 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp1+"</b><br> Проиграл: <b style='color:red;'>"+inp2+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                }
            }
            function pCol2() {
                document.querySelector(".col2").style.animation = 'blueA 400ms linear';
                document.querySelector(".col2").style.transform = 'rotateX(180deg)';
                document.querySelector(".col2").style.backgroundColor = 'blue';
                 document.querySelector(".col2").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol3() {
                document.querySelector(".col3").style.animation = 'blueA 400ms linear';
                document.querySelector(".col3").style.transform = 'rotateX(180deg)';
                document.querySelector(".col3").style.backgroundColor = 'blue';
                 document.querySelector(".col3").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol4() {
                document.querySelector(".col4").style.animation = 'blueA 400ms linear';
                document.querySelector(".col4").style.transform = 'rotateX(180deg)';
                document.querySelector(".col4").style.backgroundColor = 'blue';
                 document.querySelector(".col4").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol5() {
                document.querySelector(".col5").style.animation = 'blueA 400ms linear';
                document.querySelector(".col5").style.transform = 'rotateX(180deg)';
                document.querySelector(".col5").style.backgroundColor = 'blue';
                 document.querySelector(".col5").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol6() {
                document.querySelector(".col6").style.animation = 'blueA 400ms linear';
                document.querySelector(".col6").style.transform = 'rotateX(180deg)';
                document.querySelector(".col6").style.backgroundColor = 'blue';
                 document.querySelector(".col6").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol7() {
                document.querySelector(".col7").style.animation = 'blueA 400ms linear';
                document.querySelector(".col7").style.transform = 'rotateX(180deg)';
                document.querySelector(".col7").style.backgroundColor = 'blue';
                 document.querySelector(".col7").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol8() {
                document.querySelector(".col8").style.animation = 'blueA 400ms linear';
                document.querySelector(".col8").style.transform = 'rotateX(180deg)';
                document.querySelector(".col8").style.backgroundColor = 'blue';
                 document.querySelector(".col8").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol9() {
                document.querySelector(".col9").style.animation = 'blueA 400ms linear';
                document.querySelector(".col9").style.transform = 'rotateX(180deg)';
                document.querySelector(".col9").style.backgroundColor = 'blue';
                 document.querySelector(".col9").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol10() {
                document.querySelector(".col10").style.animation = 'blueA 400ms linear';
                document.querySelector(".col10").style.transform = 'rotateX(180deg)';
                document.querySelector(".col10").style.backgroundColor = 'blue';
                 document.querySelector(".col10").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol11() {
                document.querySelector(".col11").style.animation = 'blueA 400ms linear';
                document.querySelector(".col11").style.transform = 'rotateX(180deg)';
                document.querySelector(".col11").style.backgroundColor = 'blue';
                 document.querySelector(".col11").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol12() {
                document.querySelector(".col12").style.animation = 'blueA 400ms linear';
                document.querySelector(".col12").style.transform = 'rotateX(180deg)';
                document.querySelector(".col12").style.backgroundColor = 'blue';
                 document.querySelector(".col12").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol13() {
                document.querySelector(".col13").style.animation = 'blueA 400ms linear';
                document.querySelector(".col13").style.transform = 'rotateX(180deg)';
                document.querySelector(".col13").style.backgroundColor = 'blue';
                 document.querySelector(".col13").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol14() {
                document.querySelector(".col14").style.animation = 'blueA 400ms linear';
                document.querySelector(".col14").style.transform = 'rotateX(180deg)';
                document.querySelector(".col14").style.backgroundColor = 'blue';
                 document.querySelector(".col14").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol15() {
                document.querySelector(".col15").style.animation = 'blueA 400ms linear';
                document.querySelector(".col15").style.transform = 'rotateX(180deg)';
                document.querySelector(".col15").style.backgroundColor = 'blue';
                 document.querySelector(".col15").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol16() {
                document.querySelector(".col16").style.animation = 'blueA 400ms linear';
                document.querySelector(".col16").style.transform = 'rotateX(180deg)';
                document.querySelector(".col16").style.backgroundColor = 'blue';
                 document.querySelector(".col16").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol17() {
                document.querySelector(".col17").style.animation = 'blueA 400ms linear';
                document.querySelector(".col17").style.transform = 'rotateX(180deg)';
                document.querySelector(".col17").style.backgroundColor = 'blue';
                 document.querySelector(".col17").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol18() {
                document.querySelector(".col18").style.animation = 'blueA 400ms linear';
                document.querySelector(".col18").style.transform = 'rotateX(180deg)';
                document.querySelector(".col18").style.backgroundColor = 'blue';
                 document.querySelector(".col18").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol19() {
                document.querySelector(".col19").style.animation = 'blueA 400ms linear';
                document.querySelector(".col19").style.transform = 'rotateX(180deg)';
                document.querySelector(".col19").style.backgroundColor = 'blue';
                 document.querySelector(".col19").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol20() {
                document.querySelector(".col20").style.animation = 'blueA 400ms linear';
                document.querySelector(".col20").style.transform = 'rotateX(180deg)';
                document.querySelector(".col20").style.backgroundColor = 'blue';
                 document.querySelector(".col20").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol21() {
                document.querySelector(".col21").style.animation = 'blueA 400ms linear';
                document.querySelector(".col21").style.transform = 'rotateX(180deg)';
                document.querySelector(".col21").style.backgroundColor = 'blue';
                 document.querySelector(".col21").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol22() {
                document.querySelector(".col22").style.animation = 'blueA 400ms linear';
                document.querySelector(".col22").style.transform = 'rotateX(180deg)';
                document.querySelector(".col22").style.backgroundColor = 'blue';
                 document.querySelector(".col22").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol23() {
                document.querySelector(".col23").style.animation = 'blueA 400ms linear';
                document.querySelector(".col23").style.transform = 'rotateX(180deg)';
                document.querySelector(".col23").style.backgroundColor = 'blue';
                 document.querySelector(".col23").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol24() {
                document.querySelector(".col24").style.animation = 'blueA 400ms linear';
                document.querySelector(".col24").style.transform = 'rotateX(180deg)';
                document.querySelector(".col24").style.backgroundColor = 'blue';
                 document.querySelector(".col24").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol25() {
                document.querySelector(".col25").style.animation = 'blueA 400ms linear';
                document.querySelector(".col25").style.transform = 'rotateX(180deg)';
                document.querySelector(".col25").style.backgroundColor = 'blue';
                 document.querySelector(".col25").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
        }
        else if (me == "pCol14"){
            function pCol14() {
                document.querySelector(".col14").style.animation = 'redA 400ms linear';
                document.querySelector(".col14").style.transform = 'rotateX(180deg)';
                document.querySelector(".col14").style.backgroundColor = 'red';

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp2+"</b><br> Проиграл: <b style='color:red;'>"+inp1+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                } else if(name2 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp1+"</b><br> Проиграл: <b style='color:red;'>"+inp2+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                }
            }
            function pCol2() {
                document.querySelector(".col2").style.animation = 'blueA 400ms linear';
                document.querySelector(".col2").style.transform = 'rotateX(180deg)';
                document.querySelector(".col2").style.backgroundColor = 'blue';
                 document.querySelector(".col2").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol3() {
                document.querySelector(".col3").style.animation = 'blueA 400ms linear';
                document.querySelector(".col3").style.transform = 'rotateX(180deg)';
                document.querySelector(".col3").style.backgroundColor = 'blue';
                 document.querySelector(".col3").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol4() {
                document.querySelector(".col4").style.animation = 'blueA 400ms linear';
                document.querySelector(".col4").style.transform = 'rotateX(180deg)';
                document.querySelector(".col4").style.backgroundColor = 'blue';
                 document.querySelector(".col4").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol5() {
                document.querySelector(".col5").style.animation = 'blueA 400ms linear';
                document.querySelector(".col5").style.transform = 'rotateX(180deg)';
                document.querySelector(".col5").style.backgroundColor = 'blue';
                 document.querySelector(".col5").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol6() {
                document.querySelector(".col6").style.animation = 'blueA 400ms linear';
                document.querySelector(".col6").style.transform = 'rotateX(180deg)';
                document.querySelector(".col6").style.backgroundColor = 'blue';
                 document.querySelector(".col6").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol7() {
                document.querySelector(".col7").style.animation = 'blueA 400ms linear';
                document.querySelector(".col7").style.transform = 'rotateX(180deg)';
                document.querySelector(".col7").style.backgroundColor = 'blue';
                 document.querySelector(".col7").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol8() {
                document.querySelector(".col8").style.animation = 'blueA 400ms linear';
                document.querySelector(".col8").style.transform = 'rotateX(180deg)';
                document.querySelector(".col8").style.backgroundColor = 'blue';
                 document.querySelector(".col8").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol9() {
                document.querySelector(".col9").style.animation = 'blueA 400ms linear';
                document.querySelector(".col9").style.transform = 'rotateX(180deg)';
                document.querySelector(".col9").style.backgroundColor = 'blue';
                 document.querySelector(".col9").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol10() {
                document.querySelector(".col10").style.animation = 'blueA 400ms linear';
                document.querySelector(".col10").style.transform = 'rotateX(180deg)';
                document.querySelector(".col10").style.backgroundColor = 'blue';
                 document.querySelector(".col10").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol11() {
                document.querySelector(".col11").style.animation = 'blueA 400ms linear';
                document.querySelector(".col11").style.transform = 'rotateX(180deg)';
                document.querySelector(".col11").style.backgroundColor = 'blue';
                 document.querySelector(".col11").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol12() {
                document.querySelector(".col12").style.animation = 'blueA 400ms linear';
                document.querySelector(".col12").style.transform = 'rotateX(180deg)';
                document.querySelector(".col12").style.backgroundColor = 'blue';
                 document.querySelector(".col12").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol13() {
                document.querySelector(".col13").style.animation = 'blueA 400ms linear';
                document.querySelector(".col13").style.transform = 'rotateX(180deg)';
                document.querySelector(".col13").style.backgroundColor = 'blue';
                 document.querySelector(".col13").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol1() {
                document.querySelector(".col1").style.animation = 'blueA 400ms linear';
                document.querySelector(".col1").style.transform = 'rotateX(180deg)';
                document.querySelector(".col1").style.backgroundColor = 'blue';
                 document.querySelector(".col1").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol15() {
                document.querySelector(".col15").style.animation = 'blueA 400ms linear';
                document.querySelector(".col15").style.transform = 'rotateX(180deg)';
                document.querySelector(".col15").style.backgroundColor = 'blue';
                 document.querySelector(".col15").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol16() {
                document.querySelector(".col16").style.animation = 'blueA 400ms linear';
                document.querySelector(".col16").style.transform = 'rotateX(180deg)';
                document.querySelector(".col16").style.backgroundColor = 'blue';
                 document.querySelector(".col16").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol17() {
                document.querySelector(".col17").style.animation = 'blueA 400ms linear';
                document.querySelector(".col17").style.transform = 'rotateX(180deg)';
                document.querySelector(".col17").style.backgroundColor = 'blue';
                 document.querySelector(".col17").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol18() {
                document.querySelector(".col18").style.animation = 'blueA 400ms linear';
                document.querySelector(".col18").style.transform = 'rotateX(180deg)';
                document.querySelector(".col18").style.backgroundColor = 'blue';
                 document.querySelector(".col18").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol19() {
                document.querySelector(".col19").style.animation = 'blueA 400ms linear';
                document.querySelector(".col19").style.transform = 'rotateX(180deg)';
                document.querySelector(".col19").style.backgroundColor = 'blue';
                 document.querySelector(".col19").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol20() {
                document.querySelector(".col20").style.animation = 'blueA 400ms linear';
                document.querySelector(".col20").style.transform = 'rotateX(180deg)';
                document.querySelector(".col20").style.backgroundColor = 'blue';
                 document.querySelector(".col20").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol21() {
                document.querySelector(".col21").style.animation = 'blueA 400ms linear';
                document.querySelector(".col21").style.transform = 'rotateX(180deg)';
                document.querySelector(".col21").style.backgroundColor = 'blue';
                 document.querySelector(".col21").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol22() {
                document.querySelector(".col22").style.animation = 'blueA 400ms linear';
                document.querySelector(".col22").style.transform = 'rotateX(180deg)';
                document.querySelector(".col22").style.backgroundColor = 'blue';
                 document.querySelector(".col22").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol23() {
                document.querySelector(".col23").style.animation = 'blueA 400ms linear';
                document.querySelector(".col23").style.transform = 'rotateX(180deg)';
                document.querySelector(".col23").style.backgroundColor = 'blue';
                 document.querySelector(".col23").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol24() {
                document.querySelector(".col24").style.animation = 'blueA 400ms linear';
                document.querySelector(".col24").style.transform = 'rotateX(180deg)';
                document.querySelector(".col24").style.backgroundColor = 'blue';
                 document.querySelector(".col24").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol25() {
                document.querySelector(".col25").style.animation = 'blueA 400ms linear';
                document.querySelector(".col25").style.transform = 'rotateX(180deg)';
                document.querySelector(".col25").style.backgroundColor = 'blue';
                 document.querySelector(".col25").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
        }
        else if (me == "pCol15"){
            function pCol15() {
                document.querySelector(".col15").style.animation = 'redA 400ms linear';
                document.querySelector(".col15").style.transform = 'rotateX(180deg)';
                document.querySelector(".col15").style.backgroundColor = 'red';

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp2+"</b><br> Проиграл: <b style='color:red;'>"+inp1+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                } else if(name2 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp1+"</b><br> Проиграл: <b style='color:red;'>"+inp2+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                }
            }
            function pCol2() {
                document.querySelector(".col2").style.animation = 'blueA 400ms linear';
                document.querySelector(".col2").style.transform = 'rotateX(180deg)';
                document.querySelector(".col2").style.backgroundColor = 'blue';
                 document.querySelector(".col2").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol3() {
                document.querySelector(".col3").style.animation = 'blueA 400ms linear';
                document.querySelector(".col3").style.transform = 'rotateX(180deg)';
                document.querySelector(".col3").style.backgroundColor = 'blue';
                 document.querySelector(".col3").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol4() {
                document.querySelector(".col4").style.animation = 'blueA 400ms linear';
                document.querySelector(".col4").style.transform = 'rotateX(180deg)';
                document.querySelector(".col4").style.backgroundColor = 'blue';
                 document.querySelector(".col4").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol5() {
                document.querySelector(".col5").style.animation = 'blueA 400ms linear';
                document.querySelector(".col5").style.transform = 'rotateX(180deg)';
                document.querySelector(".col5").style.backgroundColor = 'blue';
                 document.querySelector(".col5").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol6() {
                document.querySelector(".col6").style.animation = 'blueA 400ms linear';
                document.querySelector(".col6").style.transform = 'rotateX(180deg)';
                document.querySelector(".col6").style.backgroundColor = 'blue';
                 document.querySelector(".col6").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol7() {
                document.querySelector(".col7").style.animation = 'blueA 400ms linear';
                document.querySelector(".col7").style.transform = 'rotateX(180deg)';
                document.querySelector(".col7").style.backgroundColor = 'blue';
                 document.querySelector(".col7").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol8() {
                document.querySelector(".col8").style.animation = 'blueA 400ms linear';
                document.querySelector(".col8").style.transform = 'rotateX(180deg)';
                document.querySelector(".col8").style.backgroundColor = 'blue';
                 document.querySelector(".col8").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol9() {
                document.querySelector(".col9").style.animation = 'blueA 400ms linear';
                document.querySelector(".col9").style.transform = 'rotateX(180deg)';
                document.querySelector(".col9").style.backgroundColor = 'blue';
                 document.querySelector(".col9").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol10() {
                document.querySelector(".col10").style.animation = 'blueA 400ms linear';
                document.querySelector(".col10").style.transform = 'rotateX(180deg)';
                document.querySelector(".col10").style.backgroundColor = 'blue';
                 document.querySelector(".col10").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol11() {
                document.querySelector(".col11").style.animation = 'blueA 400ms linear';
                document.querySelector(".col11").style.transform = 'rotateX(180deg)';
                document.querySelector(".col11").style.backgroundColor = 'blue';
                 document.querySelector(".col11").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol12() {
                document.querySelector(".col12").style.animation = 'blueA 400ms linear';
                document.querySelector(".col12").style.transform = 'rotateX(180deg)';
                document.querySelector(".col12").style.backgroundColor = 'blue';
                 document.querySelector(".col12").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol13() {
                document.querySelector(".col13").style.animation = 'blueA 400ms linear';
                document.querySelector(".col13").style.transform = 'rotateX(180deg)';
                document.querySelector(".col13").style.backgroundColor = 'blue';
                 document.querySelector(".col13").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol14() {
                document.querySelector(".col14").style.animation = 'blueA 400ms linear';
                document.querySelector(".col14").style.transform = 'rotateX(180deg)';
                document.querySelector(".col14").style.backgroundColor = 'blue';
                 document.querySelector(".col14").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol1() {
                document.querySelector(".col1").style.animation = 'blueA 400ms linear';
                document.querySelector(".col1").style.transform = 'rotateX(180deg)';
                document.querySelector(".col1").style.backgroundColor = 'blue';
                 document.querySelector(".col1").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol16() {
                document.querySelector(".col16").style.animation = 'blueA 400ms linear';
                document.querySelector(".col16").style.transform = 'rotateX(180deg)';
                document.querySelector(".col16").style.backgroundColor = 'blue';
                 document.querySelector(".col16").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol17() {
                document.querySelector(".col17").style.animation = 'blueA 400ms linear';
                document.querySelector(".col17").style.transform = 'rotateX(180deg)';
                document.querySelector(".col17").style.backgroundColor = 'blue';
                 document.querySelector(".col17").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol18() {
                document.querySelector(".col18").style.animation = 'blueA 400ms linear';
                document.querySelector(".col18").style.transform = 'rotateX(180deg)';
                document.querySelector(".col18").style.backgroundColor = 'blue';
                 document.querySelector(".col18").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol19() {
                document.querySelector(".col19").style.animation = 'blueA 400ms linear';
                document.querySelector(".col19").style.transform = 'rotateX(180deg)';
                document.querySelector(".col19").style.backgroundColor = 'blue';
                 document.querySelector(".col19").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol20() {
                document.querySelector(".col20").style.animation = 'blueA 400ms linear';
                document.querySelector(".col20").style.transform = 'rotateX(180deg)';
                document.querySelector(".col20").style.backgroundColor = 'blue';
                 document.querySelector(".col20").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol21() {
                document.querySelector(".col21").style.animation = 'blueA 400ms linear';
                document.querySelector(".col21").style.transform = 'rotateX(180deg)';
                document.querySelector(".col21").style.backgroundColor = 'blue';
                 document.querySelector(".col21").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol22() {
                document.querySelector(".col22").style.animation = 'blueA 400ms linear';
                document.querySelector(".col22").style.transform = 'rotateX(180deg)';
                document.querySelector(".col22").style.backgroundColor = 'blue';
                 document.querySelector(".col22").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol23() {
                document.querySelector(".col23").style.animation = 'blueA 400ms linear';
                document.querySelector(".col23").style.transform = 'rotateX(180deg)';
                document.querySelector(".col23").style.backgroundColor = 'blue';
                 document.querySelector(".col23").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol24() {
                document.querySelector(".col24").style.animation = 'blueA 400ms linear';
                document.querySelector(".col24").style.transform = 'rotateX(180deg)';
                document.querySelector(".col24").style.backgroundColor = 'blue';
                 document.querySelector(".col24").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol25() {
                document.querySelector(".col25").style.animation = 'blueA 400ms linear';
                document.querySelector(".col25").style.transform = 'rotateX(180deg)';
                document.querySelector(".col25").style.backgroundColor = 'blue';
                 document.querySelector(".col25").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
        }
        else if (me == "pCol16"){
            function pCol16() {
                document.querySelector(".col16").style.animation = 'redA 400ms linear';
                document.querySelector(".col16").style.transform = 'rotateX(180deg)';
                document.querySelector(".col16").style.backgroundColor = 'red';

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp2+"</b><br> Проиграл: <b style='color:red;'>"+inp1+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                } else if(name2 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp1+"</b><br> Проиграл: <b style='color:red;'>"+inp2+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                }
            }
            function pCol2() {
                document.querySelector(".col2").style.animation = 'blueA 400ms linear';
                document.querySelector(".col2").style.transform = 'rotateX(180deg)';
                document.querySelector(".col2").style.backgroundColor = 'blue';
                 document.querySelector(".col2").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol3() {
                document.querySelector(".col3").style.animation = 'blueA 400ms linear';
                document.querySelector(".col3").style.transform = 'rotateX(180deg)';
                document.querySelector(".col3").style.backgroundColor = 'blue';
                 document.querySelector(".col3").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol4() {
                document.querySelector(".col4").style.animation = 'blueA 400ms linear';
                document.querySelector(".col4").style.transform = 'rotateX(180deg)';
                document.querySelector(".col4").style.backgroundColor = 'blue';
                 document.querySelector(".col4").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol5() {
                document.querySelector(".col5").style.animation = 'blueA 400ms linear';
                document.querySelector(".col5").style.transform = 'rotateX(180deg)';
                document.querySelector(".col5").style.backgroundColor = 'blue';
                 document.querySelector(".col5").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol6() {
                document.querySelector(".col6").style.animation = 'blueA 400ms linear';
                document.querySelector(".col6").style.transform = 'rotateX(180deg)';
                document.querySelector(".col6").style.backgroundColor = 'blue';
                 document.querySelector(".col6").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol7() {
                document.querySelector(".col7").style.animation = 'blueA 400ms linear';
                document.querySelector(".col7").style.transform = 'rotateX(180deg)';
                document.querySelector(".col7").style.backgroundColor = 'blue';
                 document.querySelector(".col7").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol8() {
                document.querySelector(".col8").style.animation = 'blueA 400ms linear';
                document.querySelector(".col8").style.transform = 'rotateX(180deg)';
                document.querySelector(".col8").style.backgroundColor = 'blue';
                 document.querySelector(".col8").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol9() {
                document.querySelector(".col9").style.animation = 'blueA 400ms linear';
                document.querySelector(".col9").style.transform = 'rotateX(180deg)';
                document.querySelector(".col9").style.backgroundColor = 'blue';
                 document.querySelector(".col9").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol10() {
                document.querySelector(".col10").style.animation = 'blueA 400ms linear';
                document.querySelector(".col10").style.transform = 'rotateX(180deg)';
                document.querySelector(".col10").style.backgroundColor = 'blue';
                 document.querySelector(".col10").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol11() {
                document.querySelector(".col11").style.animation = 'blueA 400ms linear';
                document.querySelector(".col11").style.transform = 'rotateX(180deg)';
                document.querySelector(".col11").style.backgroundColor = 'blue';
                 document.querySelector(".col11").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol12() {
                document.querySelector(".col12").style.animation = 'blueA 400ms linear';
                document.querySelector(".col12").style.transform = 'rotateX(180deg)';
                document.querySelector(".col12").style.backgroundColor = 'blue';
                 document.querySelector(".col12").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol13() {
                document.querySelector(".col13").style.animation = 'blueA 400ms linear';
                document.querySelector(".col13").style.transform = 'rotateX(180deg)';
                document.querySelector(".col13").style.backgroundColor = 'blue';
                 document.querySelector(".col13").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol14() {
                document.querySelector(".col14").style.animation = 'blueA 400ms linear';
                document.querySelector(".col14").style.transform = 'rotateX(180deg)';
                document.querySelector(".col14").style.backgroundColor = 'blue';
                 document.querySelector(".col14").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol15() {
                document.querySelector(".col15").style.animation = 'blueA 400ms linear';
                document.querySelector(".col15").style.transform = 'rotateX(180deg)';
                document.querySelector(".col15").style.backgroundColor = 'blue';
                 document.querySelector(".col15").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol1() {
                document.querySelector(".col1").style.animation = 'blueA 400ms linear';
                document.querySelector(".col1").style.transform = 'rotateX(180deg)';
                document.querySelector(".col1").style.backgroundColor = 'blue';
                 document.querySelector(".col1").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol17() {
                document.querySelector(".col17").style.animation = 'blueA 400ms linear';
                document.querySelector(".col17").style.transform = 'rotateX(180deg)';
                document.querySelector(".col17").style.backgroundColor = 'blue';
                 document.querySelector(".col17").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol18() {
                document.querySelector(".col18").style.animation = 'blueA 400ms linear';
                document.querySelector(".col18").style.transform = 'rotateX(180deg)';
                document.querySelector(".col18").style.backgroundColor = 'blue';
                 document.querySelector(".col18").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol19() {
                document.querySelector(".col19").style.animation = 'blueA 400ms linear';
                document.querySelector(".col19").style.transform = 'rotateX(180deg)';
                document.querySelector(".col19").style.backgroundColor = 'blue';
                 document.querySelector(".col19").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol20() {
                document.querySelector(".col20").style.animation = 'blueA 400ms linear';
                document.querySelector(".col20").style.transform = 'rotateX(180deg)';
                document.querySelector(".col20").style.backgroundColor = 'blue';
                 document.querySelector(".col20").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol21() {
                document.querySelector(".col21").style.animation = 'blueA 400ms linear';
                document.querySelector(".col21").style.transform = 'rotateX(180deg)';
                document.querySelector(".col21").style.backgroundColor = 'blue';
                 document.querySelector(".col21").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol22() {
                document.querySelector(".col22").style.animation = 'blueA 400ms linear';
                document.querySelector(".col22").style.transform = 'rotateX(180deg)';
                document.querySelector(".col22").style.backgroundColor = 'blue';
                 document.querySelector(".col22").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol23() {
                document.querySelector(".col23").style.animation = 'blueA 400ms linear';
                document.querySelector(".col23").style.transform = 'rotateX(180deg)';
                document.querySelector(".col23").style.backgroundColor = 'blue';
                 document.querySelector(".col23").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol24() {
                document.querySelector(".col24").style.animation = 'blueA 400ms linear';
                document.querySelector(".col24").style.transform = 'rotateX(180deg)';
                document.querySelector(".col24").style.backgroundColor = 'blue';
                 document.querySelector(".col24").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol25() {
                document.querySelector(".col25").style.animation = 'blueA 400ms linear';
                document.querySelector(".col25").style.transform = 'rotateX(180deg)';
                document.querySelector(".col25").style.backgroundColor = 'blue';
                 document.querySelector(".col25").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
        }
        else if (me == "pCol17"){
            function pCol17() {
                document.querySelector(".col17").style.animation = 'redA 400ms linear';
                document.querySelector(".col17").style.transform = 'rotateX(180deg)';
                document.querySelector(".col17").style.backgroundColor = 'red';

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp2+"</b><br> Проиграл: <b style='color:red;'>"+inp1+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                } else if(name2 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp1+"</b><br> Проиграл: <b style='color:red;'>"+inp2+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                }
            }
            function pCol2() {
                document.querySelector(".col2").style.animation = 'blueA 400ms linear';
                document.querySelector(".col2").style.transform = 'rotateX(180deg)';
                document.querySelector(".col2").style.backgroundColor = 'blue';
                 document.querySelector(".col2").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol3() {
                document.querySelector(".col3").style.animation = 'blueA 400ms linear';
                document.querySelector(".col3").style.transform = 'rotateX(180deg)';
                document.querySelector(".col3").style.backgroundColor = 'blue';
                 document.querySelector(".col3").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol4() {
                document.querySelector(".col4").style.animation = 'blueA 400ms linear';
                document.querySelector(".col4").style.transform = 'rotateX(180deg)';
                document.querySelector(".col4").style.backgroundColor = 'blue';
                 document.querySelector(".col4").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol5() {
                document.querySelector(".col5").style.animation = 'blueA 400ms linear';
                document.querySelector(".col5").style.transform = 'rotateX(180deg)';
                document.querySelector(".col5").style.backgroundColor = 'blue';
                 document.querySelector(".col5").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol6() {
                document.querySelector(".col6").style.animation = 'blueA 400ms linear';
                document.querySelector(".col6").style.transform = 'rotateX(180deg)';
                document.querySelector(".col6").style.backgroundColor = 'blue';
                 document.querySelector(".col6").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol7() {
                document.querySelector(".col7").style.animation = 'blueA 400ms linear';
                document.querySelector(".col7").style.transform = 'rotateX(180deg)';
                document.querySelector(".col7").style.backgroundColor = 'blue';
                 document.querySelector(".col7").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol8() {
                document.querySelector(".col8").style.animation = 'blueA 400ms linear';
                document.querySelector(".col8").style.transform = 'rotateX(180deg)';
                document.querySelector(".col8").style.backgroundColor = 'blue';
                 document.querySelector(".col8").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol9() {
                document.querySelector(".col9").style.animation = 'blueA 400ms linear';
                document.querySelector(".col9").style.transform = 'rotateX(180deg)';
                document.querySelector(".col9").style.backgroundColor = 'blue';
                 document.querySelector(".col9").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol10() {
                document.querySelector(".col10").style.animation = 'blueA 400ms linear';
                document.querySelector(".col10").style.transform = 'rotateX(180deg)';
                document.querySelector(".col10").style.backgroundColor = 'blue';
                 document.querySelector(".col10").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol11() {
                document.querySelector(".col11").style.animation = 'blueA 400ms linear';
                document.querySelector(".col11").style.transform = 'rotateX(180deg)';
                document.querySelector(".col11").style.backgroundColor = 'blue';
                 document.querySelector(".col11").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol12() {
                document.querySelector(".col12").style.animation = 'blueA 400ms linear';
                document.querySelector(".col12").style.transform = 'rotateX(180deg)';
                document.querySelector(".col12").style.backgroundColor = 'blue';
                 document.querySelector(".col12").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol13() {
                document.querySelector(".col13").style.animation = 'blueA 400ms linear';
                document.querySelector(".col13").style.transform = 'rotateX(180deg)';
                document.querySelector(".col13").style.backgroundColor = 'blue';
                 document.querySelector(".col13").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol14() {
                document.querySelector(".col14").style.animation = 'blueA 400ms linear';
                document.querySelector(".col14").style.transform = 'rotateX(180deg)';
                document.querySelector(".col14").style.backgroundColor = 'blue';
                 document.querySelector(".col14").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol15() {
                document.querySelector(".col15").style.animation = 'blueA 400ms linear';
                document.querySelector(".col15").style.transform = 'rotateX(180deg)';
                document.querySelector(".col15").style.backgroundColor = 'blue';
                 document.querySelector(".col15").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol16() {
                document.querySelector(".col16").style.animation = 'blueA 400ms linear';
                document.querySelector(".col16").style.transform = 'rotateX(180deg)';
                document.querySelector(".col16").style.backgroundColor = 'blue';
                 document.querySelector(".col16").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol1() {
                document.querySelector(".col1").style.animation = 'blueA 400ms linear';
                document.querySelector(".col1").style.transform = 'rotateX(180deg)';
                document.querySelector(".col1").style.backgroundColor = 'blue';
                 document.querySelector(".col1").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol18() {
                document.querySelector(".col18").style.animation = 'blueA 400ms linear';
                document.querySelector(".col18").style.transform = 'rotateX(180deg)';
                document.querySelector(".col18").style.backgroundColor = 'blue';
                 document.querySelector(".col18").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol19() {
                document.querySelector(".col19").style.animation = 'blueA 400ms linear';
                document.querySelector(".col19").style.transform = 'rotateX(180deg)';
                document.querySelector(".col19").style.backgroundColor = 'blue';
                 document.querySelector(".col19").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol20() {
                document.querySelector(".col20").style.animation = 'blueA 400ms linear';
                document.querySelector(".col20").style.transform = 'rotateX(180deg)';
                document.querySelector(".col20").style.backgroundColor = 'blue';
                 document.querySelector(".col20").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol21() {
                document.querySelector(".col21").style.animation = 'blueA 400ms linear';
                document.querySelector(".col21").style.transform = 'rotateX(180deg)';
                document.querySelector(".col21").style.backgroundColor = 'blue';
                 document.querySelector(".col21").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol22() {
                document.querySelector(".col22").style.animation = 'blueA 400ms linear';
                document.querySelector(".col22").style.transform = 'rotateX(180deg)';
                document.querySelector(".col22").style.backgroundColor = 'blue';
                 document.querySelector(".col22").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol23() {
                document.querySelector(".col23").style.animation = 'blueA 400ms linear';
                document.querySelector(".col23").style.transform = 'rotateX(180deg)';
                document.querySelector(".col23").style.backgroundColor = 'blue';
                 document.querySelector(".col23").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol24() {
                document.querySelector(".col24").style.animation = 'blueA 400ms linear';
                document.querySelector(".col24").style.transform = 'rotateX(180deg)';
                document.querySelector(".col24").style.backgroundColor = 'blue';
                 document.querySelector(".col24").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol25() {
                document.querySelector(".col25").style.animation = 'blueA 400ms linear';
                document.querySelector(".col25").style.transform = 'rotateX(180deg)';
                document.querySelector(".col25").style.backgroundColor = 'blue';
                 document.querySelector(".col25").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
        }
        else if (me == "pCol18"){
            function pCol18() {
                document.querySelector(".col18").style.animation = 'redA 400ms linear';
                document.querySelector(".col18").style.transform = 'rotateX(180deg)';
                document.querySelector(".col18").style.backgroundColor = 'red';

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp2+"</b><br> Проиграл: <b style='color:red;'>"+inp1+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                } else if(name2 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp1+"</b><br> Проиграл: <b style='color:red;'>"+inp2+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                }
            }
            function pCol2() {
                document.querySelector(".col2").style.animation = 'blueA 400ms linear';
                document.querySelector(".col2").style.transform = 'rotateX(180deg)';
                document.querySelector(".col2").style.backgroundColor = 'blue';
                 document.querySelector(".col2").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol3() {
                document.querySelector(".col3").style.animation = 'blueA 400ms linear';
                document.querySelector(".col3").style.transform = 'rotateX(180deg)';
                document.querySelector(".col3").style.backgroundColor = 'blue';
                 document.querySelector(".col3").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol4() {
                document.querySelector(".col4").style.animation = 'blueA 400ms linear';
                document.querySelector(".col4").style.transform = 'rotateX(180deg)';
                document.querySelector(".col4").style.backgroundColor = 'blue';
                 document.querySelector(".col4").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol5() {
                document.querySelector(".col5").style.animation = 'blueA 400ms linear';
                document.querySelector(".col5").style.transform = 'rotateX(180deg)';
                document.querySelector(".col5").style.backgroundColor = 'blue';
                 document.querySelector(".col5").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol6() {
                document.querySelector(".col6").style.animation = 'blueA 400ms linear';
                document.querySelector(".col6").style.transform = 'rotateX(180deg)';
                document.querySelector(".col6").style.backgroundColor = 'blue';
                 document.querySelector(".col6").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol7() {
                document.querySelector(".col7").style.animation = 'blueA 400ms linear';
                document.querySelector(".col7").style.transform = 'rotateX(180deg)';
                document.querySelector(".col7").style.backgroundColor = 'blue';
                 document.querySelector(".col7").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol8() {
                document.querySelector(".col8").style.animation = 'blueA 400ms linear';
                document.querySelector(".col8").style.transform = 'rotateX(180deg)';
                document.querySelector(".col8").style.backgroundColor = 'blue';
                 document.querySelector(".col8").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol9() {
                document.querySelector(".col9").style.animation = 'blueA 400ms linear';
                document.querySelector(".col9").style.transform = 'rotateX(180deg)';
                document.querySelector(".col9").style.backgroundColor = 'blue';
                 document.querySelector(".col9").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol10() {
                document.querySelector(".col10").style.animation = 'blueA 400ms linear';
                document.querySelector(".col10").style.transform = 'rotateX(180deg)';
                document.querySelector(".col10").style.backgroundColor = 'blue';
                 document.querySelector(".col10").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol11() {
                document.querySelector(".col11").style.animation = 'blueA 400ms linear';
                document.querySelector(".col11").style.transform = 'rotateX(180deg)';
                document.querySelector(".col11").style.backgroundColor = 'blue';
                 document.querySelector(".col11").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol12() {
                document.querySelector(".col12").style.animation = 'blueA 400ms linear';
                document.querySelector(".col12").style.transform = 'rotateX(180deg)';
                document.querySelector(".col12").style.backgroundColor = 'blue';
                 document.querySelector(".col12").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol13() {
                document.querySelector(".col13").style.animation = 'blueA 400ms linear';
                document.querySelector(".col13").style.transform = 'rotateX(180deg)';
                document.querySelector(".col13").style.backgroundColor = 'blue';
                 document.querySelector(".col13").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol14() {
                document.querySelector(".col14").style.animation = 'blueA 400ms linear';
                document.querySelector(".col14").style.transform = 'rotateX(180deg)';
                document.querySelector(".col14").style.backgroundColor = 'blue';
                 document.querySelector(".col14").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol15() {
                document.querySelector(".col15").style.animation = 'blueA 400ms linear';
                document.querySelector(".col15").style.transform = 'rotateX(180deg)';
                document.querySelector(".col15").style.backgroundColor = 'blue';
                 document.querySelector(".col15").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol16() {
                document.querySelector(".col16").style.animation = 'blueA 400ms linear';
                document.querySelector(".col16").style.transform = 'rotateX(180deg)';
                document.querySelector(".col16").style.backgroundColor = 'blue';
                 document.querySelector(".col16").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol17() {
                document.querySelector(".col17").style.animation = 'blueA 400ms linear';
                document.querySelector(".col17").style.transform = 'rotateX(180deg)';
                document.querySelector(".col17").style.backgroundColor = 'blue';
                 document.querySelector(".col17").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol1() {
                document.querySelector(".col1").style.animation = 'blueA 400ms linear';
                document.querySelector(".col1").style.transform = 'rotateX(180deg)';
                document.querySelector(".col1").style.backgroundColor = 'blue';
                 document.querySelector(".col1").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol19() {
                document.querySelector(".col19").style.animation = 'blueA 400ms linear';
                document.querySelector(".col19").style.transform = 'rotateX(180deg)';
                document.querySelector(".col19").style.backgroundColor = 'blue';
                 document.querySelector(".col19").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol20() {
                document.querySelector(".col20").style.animation = 'blueA 400ms linear';
                document.querySelector(".col20").style.transform = 'rotateX(180deg)';
                document.querySelector(".col20").style.backgroundColor = 'blue';
                 document.querySelector(".col20").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol21() {
                document.querySelector(".col21").style.animation = 'blueA 400ms linear';
                document.querySelector(".col21").style.transform = 'rotateX(180deg)';
                document.querySelector(".col21").style.backgroundColor = 'blue';
                 document.querySelector(".col21").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol22() {
                document.querySelector(".col22").style.animation = 'blueA 400ms linear';
                document.querySelector(".col22").style.transform = 'rotateX(180deg)';
                document.querySelector(".col22").style.backgroundColor = 'blue';
                 document.querySelector(".col22").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol23() {
                document.querySelector(".col23").style.animation = 'blueA 400ms linear';
                document.querySelector(".col23").style.transform = 'rotateX(180deg)';
                document.querySelector(".col23").style.backgroundColor = 'blue';
                 document.querySelector(".col23").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol24() {
                document.querySelector(".col24").style.animation = 'blueA 400ms linear';
                document.querySelector(".col24").style.transform = 'rotateX(180deg)';
                document.querySelector(".col24").style.backgroundColor = 'blue';
                 document.querySelector(".col24").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol25() {
                document.querySelector(".col25").style.animation = 'blueA 400ms linear';
                document.querySelector(".col25").style.transform = 'rotateX(180deg)';
                document.querySelector(".col25").style.backgroundColor = 'blue';
                 document.querySelector(".col25").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
        }
        else if (me == "pCol19"){
            function pCol19() {
                document.querySelector(".col19").style.animation = 'redA 400ms linear';
                document.querySelector(".col19").style.transform = 'rotateX(180deg)';
                document.querySelector(".col19").style.backgroundColor = 'red';

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp2+"</b><br> Проиграл: <b style='color:red;'>"+inp1+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                } else if(name2 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp1+"</b><br> Проиграл: <b style='color:red;'>"+inp2+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                }
            }
            function pCol2() {
                document.querySelector(".col2").style.animation = 'blueA 400ms linear';
                document.querySelector(".col2").style.transform = 'rotateX(180deg)';
                document.querySelector(".col2").style.backgroundColor = 'blue';
                 document.querySelector(".col2").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol3() {
                document.querySelector(".col3").style.animation = 'blueA 400ms linear';
                document.querySelector(".col3").style.transform = 'rotateX(180deg)';
                document.querySelector(".col3").style.backgroundColor = 'blue';
                 document.querySelector(".col3").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol4() {
                document.querySelector(".col4").style.animation = 'blueA 400ms linear';
                document.querySelector(".col4").style.transform = 'rotateX(180deg)';
                document.querySelector(".col4").style.backgroundColor = 'blue';
                 document.querySelector(".col4").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol5() {
                document.querySelector(".col5").style.animation = 'blueA 400ms linear';
                document.querySelector(".col5").style.transform = 'rotateX(180deg)';
                document.querySelector(".col5").style.backgroundColor = 'blue';
                 document.querySelector(".col5").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol6() {
                document.querySelector(".col6").style.animation = 'blueA 400ms linear';
                document.querySelector(".col6").style.transform = 'rotateX(180deg)';
                document.querySelector(".col6").style.backgroundColor = 'blue';
                 document.querySelector(".col6").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol7() {
                document.querySelector(".col7").style.animation = 'blueA 400ms linear';
                document.querySelector(".col7").style.transform = 'rotateX(180deg)';
                document.querySelector(".col7").style.backgroundColor = 'blue';
                 document.querySelector(".col7").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol8() {
                document.querySelector(".col8").style.animation = 'blueA 400ms linear';
                document.querySelector(".col8").style.transform = 'rotateX(180deg)';
                document.querySelector(".col8").style.backgroundColor = 'blue';
                 document.querySelector(".col8").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol9() {
                document.querySelector(".col9").style.animation = 'blueA 400ms linear';
                document.querySelector(".col9").style.transform = 'rotateX(180deg)';
                document.querySelector(".col9").style.backgroundColor = 'blue';
                 document.querySelector(".col9").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol10() {
                document.querySelector(".col10").style.animation = 'blueA 400ms linear';
                document.querySelector(".col10").style.transform = 'rotateX(180deg)';
                document.querySelector(".col10").style.backgroundColor = 'blue';
                 document.querySelector(".col10").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol11() {
                document.querySelector(".col11").style.animation = 'blueA 400ms linear';
                document.querySelector(".col11").style.transform = 'rotateX(180deg)';
                document.querySelector(".col11").style.backgroundColor = 'blue';
                 document.querySelector(".col11").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol12() {
                document.querySelector(".col12").style.animation = 'blueA 400ms linear';
                document.querySelector(".col12").style.transform = 'rotateX(180deg)';
                document.querySelector(".col12").style.backgroundColor = 'blue';
                 document.querySelector(".col12").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol13() {
                document.querySelector(".col13").style.animation = 'blueA 400ms linear';
                document.querySelector(".col13").style.transform = 'rotateX(180deg)';
                document.querySelector(".col13").style.backgroundColor = 'blue';
                 document.querySelector(".col13").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol14() {
                document.querySelector(".col14").style.animation = 'blueA 400ms linear';
                document.querySelector(".col14").style.transform = 'rotateX(180deg)';
                document.querySelector(".col14").style.backgroundColor = 'blue';
                 document.querySelector(".col14").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol15() {
                document.querySelector(".col15").style.animation = 'blueA 400ms linear';
                document.querySelector(".col15").style.transform = 'rotateX(180deg)';
                document.querySelector(".col15").style.backgroundColor = 'blue';
                 document.querySelector(".col15").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol16() {
                document.querySelector(".col16").style.animation = 'blueA 400ms linear';
                document.querySelector(".col16").style.transform = 'rotateX(180deg)';
                document.querySelector(".col16").style.backgroundColor = 'blue';
                 document.querySelector(".col16").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol17() {
                document.querySelector(".col17").style.animation = 'blueA 400ms linear';
                document.querySelector(".col17").style.transform = 'rotateX(180deg)';
                document.querySelector(".col17").style.backgroundColor = 'blue';
                 document.querySelector(".col17").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol18() {
                document.querySelector(".col18").style.animation = 'blueA 400ms linear';
                document.querySelector(".col18").style.transform = 'rotateX(180deg)';
                document.querySelector(".col18").style.backgroundColor = 'blue';
                 document.querySelector(".col18").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol1() {
                document.querySelector(".col1").style.animation = 'blueA 400ms linear';
                document.querySelector(".col1").style.transform = 'rotateX(180deg)';
                document.querySelector(".col1").style.backgroundColor = 'blue';
                 document.querySelector(".col1").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol20() {
                document.querySelector(".col20").style.animation = 'blueA 400ms linear';
                document.querySelector(".col20").style.transform = 'rotateX(180deg)';
                document.querySelector(".col20").style.backgroundColor = 'blue';
                 document.querySelector(".col20").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol21() {
                document.querySelector(".col21").style.animation = 'blueA 400ms linear';
                document.querySelector(".col21").style.transform = 'rotateX(180deg)';
                document.querySelector(".col21").style.backgroundColor = 'blue';
                 document.querySelector(".col21").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol22() {
                document.querySelector(".col22").style.animation = 'blueA 400ms linear';
                document.querySelector(".col22").style.transform = 'rotateX(180deg)';
                document.querySelector(".col22").style.backgroundColor = 'blue';
                 document.querySelector(".col22").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol23() {
                document.querySelector(".col23").style.animation = 'blueA 400ms linear';
                document.querySelector(".col23").style.transform = 'rotateX(180deg)';
                document.querySelector(".col23").style.backgroundColor = 'blue';
                 document.querySelector(".col23").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol24() {
                document.querySelector(".col24").style.animation = 'blueA 400ms linear';
                document.querySelector(".col24").style.transform = 'rotateX(180deg)';
                document.querySelector(".col24").style.backgroundColor = 'blue';
                 document.querySelector(".col24").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol25() {
                document.querySelector(".col25").style.animation = 'blueA 400ms linear';
                document.querySelector(".col25").style.transform = 'rotateX(180deg)';
                document.querySelector(".col25").style.backgroundColor = 'blue';
                 document.querySelector(".col25").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
        }
        else if (me == "pCol20"){
            function pCol20() {
                document.querySelector(".col20").style.animation = 'redA 400ms linear';
                document.querySelector(".col20").style.transform = 'rotateX(180deg)';
                document.querySelector(".col20").style.backgroundColor = 'red';

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp2+"</b><br> Проиграл: <b style='color:red;'>"+inp1+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                } else if(name2 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp1+"</b><br> Проиграл: <b style='color:red;'>"+inp2+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                }
            }
            function pCol2() {
                document.querySelector(".col2").style.animation = 'blueA 400ms linear';
                document.querySelector(".col2").style.transform = 'rotateX(180deg)';
                document.querySelector(".col2").style.backgroundColor = 'blue';
                 document.querySelector(".col2").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol3() {
                document.querySelector(".col3").style.animation = 'blueA 400ms linear';
                document.querySelector(".col3").style.transform = 'rotateX(180deg)';
                document.querySelector(".col3").style.backgroundColor = 'blue';
                 document.querySelector(".col3").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol4() {
                document.querySelector(".col4").style.animation = 'blueA 400ms linear';
                document.querySelector(".col4").style.transform = 'rotateX(180deg)';
                document.querySelector(".col4").style.backgroundColor = 'blue';
                 document.querySelector(".col4").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol5() {
                document.querySelector(".col5").style.animation = 'blueA 400ms linear';
                document.querySelector(".col5").style.transform = 'rotateX(180deg)';
                document.querySelector(".col5").style.backgroundColor = 'blue';
                 document.querySelector(".col5").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol6() {
                document.querySelector(".col6").style.animation = 'blueA 400ms linear';
                document.querySelector(".col6").style.transform = 'rotateX(180deg)';
                document.querySelector(".col6").style.backgroundColor = 'blue';
                 document.querySelector(".col6").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol7() {
                document.querySelector(".col7").style.animation = 'blueA 400ms linear';
                document.querySelector(".col7").style.transform = 'rotateX(180deg)';
                document.querySelector(".col7").style.backgroundColor = 'blue';
                 document.querySelector(".col7").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol8() {
                document.querySelector(".col8").style.animation = 'blueA 400ms linear';
                document.querySelector(".col8").style.transform = 'rotateX(180deg)';
                document.querySelector(".col8").style.backgroundColor = 'blue';
                 document.querySelector(".col8").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol9() {
                document.querySelector(".col9").style.animation = 'blueA 400ms linear';
                document.querySelector(".col9").style.transform = 'rotateX(180deg)';
                document.querySelector(".col9").style.backgroundColor = 'blue';
                 document.querySelector(".col9").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol10() {
                document.querySelector(".col10").style.animation = 'blueA 400ms linear';
                document.querySelector(".col10").style.transform = 'rotateX(180deg)';
                document.querySelector(".col10").style.backgroundColor = 'blue';
                 document.querySelector(".col10").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol11() {
                document.querySelector(".col11").style.animation = 'blueA 400ms linear';
                document.querySelector(".col11").style.transform = 'rotateX(180deg)';
                document.querySelector(".col11").style.backgroundColor = 'blue';
                 document.querySelector(".col11").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol12() {
                document.querySelector(".col12").style.animation = 'blueA 400ms linear';
                document.querySelector(".col12").style.transform = 'rotateX(180deg)';
                document.querySelector(".col12").style.backgroundColor = 'blue';
                 document.querySelector(".col12").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol13() {
                document.querySelector(".col13").style.animation = 'blueA 400ms linear';
                document.querySelector(".col13").style.transform = 'rotateX(180deg)';
                document.querySelector(".col13").style.backgroundColor = 'blue';
                 document.querySelector(".col13").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol14() {
                document.querySelector(".col14").style.animation = 'blueA 400ms linear';
                document.querySelector(".col14").style.transform = 'rotateX(180deg)';
                document.querySelector(".col14").style.backgroundColor = 'blue';
                 document.querySelector(".col14").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol15() {
                document.querySelector(".col15").style.animation = 'blueA 400ms linear';
                document.querySelector(".col15").style.transform = 'rotateX(180deg)';
                document.querySelector(".col15").style.backgroundColor = 'blue';
                 document.querySelector(".col15").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol16() {
                document.querySelector(".col16").style.animation = 'blueA 400ms linear';
                document.querySelector(".col16").style.transform = 'rotateX(180deg)';
                document.querySelector(".col16").style.backgroundColor = 'blue';
                 document.querySelector(".col16").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol17() {
                document.querySelector(".col17").style.animation = 'blueA 400ms linear';
                document.querySelector(".col17").style.transform = 'rotateX(180deg)';
                document.querySelector(".col17").style.backgroundColor = 'blue';
                 document.querySelector(".col17").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol18() {
                document.querySelector(".col18").style.animation = 'blueA 400ms linear';
                document.querySelector(".col18").style.transform = 'rotateX(180deg)';
                document.querySelector(".col18").style.backgroundColor = 'blue';
                 document.querySelector(".col18").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol19() {
                document.querySelector(".col19").style.animation = 'blueA 400ms linear';
                document.querySelector(".col19").style.transform = 'rotateX(180deg)';
                document.querySelector(".col19").style.backgroundColor = 'blue';
                 document.querySelector(".col19").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol1() {
                document.querySelector(".col1").style.animation = 'blueA 400ms linear';
                document.querySelector(".col1").style.transform = 'rotateX(180deg)';
                document.querySelector(".col1").style.backgroundColor = 'blue';
                 document.querySelector(".col1").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol21() {
                document.querySelector(".col21").style.animation = 'blueA 400ms linear';
                document.querySelector(".col21").style.transform = 'rotateX(180deg)';
                document.querySelector(".col21").style.backgroundColor = 'blue';
                 document.querySelector(".col21").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol22() {
                document.querySelector(".col22").style.animation = 'blueA 400ms linear';
                document.querySelector(".col22").style.transform = 'rotateX(180deg)';
                document.querySelector(".col22").style.backgroundColor = 'blue';
                 document.querySelector(".col22").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol23() {
                document.querySelector(".col23").style.animation = 'blueA 400ms linear';
                document.querySelector(".col23").style.transform = 'rotateX(180deg)';
                document.querySelector(".col23").style.backgroundColor = 'blue';
                 document.querySelector(".col23").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol24() {
                document.querySelector(".col24").style.animation = 'blueA 400ms linear';
                document.querySelector(".col24").style.transform = 'rotateX(180deg)';
                document.querySelector(".col24").style.backgroundColor = 'blue';
                 document.querySelector(".col24").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol25() {
                document.querySelector(".col25").style.animation = 'blueA 400ms linear';
                document.querySelector(".col25").style.transform = 'rotateX(180deg)';
                document.querySelector(".col25").style.backgroundColor = 'blue';
                 document.querySelector(".col25").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
        }
        else if (me == "pCol21"){
            function pCol21() {
                document.querySelector(".col21").style.animation = 'redA 400ms linear';
                document.querySelector(".col21").style.transform = 'rotateX(180deg)';
                document.querySelector(".col21").style.backgroundColor = 'red';

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp2+"</b><br> Проиграл: <b style='color:red;'>"+inp1+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                } else if(name2 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp1+"</b><br> Проиграл: <b style='color:red;'>"+inp2+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                }
            }
            function pCol2() {
                document.querySelector(".col2").style.animation = 'blueA 400ms linear';
                document.querySelector(".col2").style.transform = 'rotateX(180deg)';
                document.querySelector(".col2").style.backgroundColor = 'blue';
                 document.querySelector(".col2").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol3() {
                document.querySelector(".col3").style.animation = 'blueA 400ms linear';
                document.querySelector(".col3").style.transform = 'rotateX(180deg)';
                document.querySelector(".col3").style.backgroundColor = 'blue';
                 document.querySelector(".col3").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol4() {
                document.querySelector(".col4").style.animation = 'blueA 400ms linear';
                document.querySelector(".col4").style.transform = 'rotateX(180deg)';
                document.querySelector(".col4").style.backgroundColor = 'blue';
                 document.querySelector(".col4").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol5() {
                document.querySelector(".col5").style.animation = 'blueA 400ms linear';
                document.querySelector(".col5").style.transform = 'rotateX(180deg)';
                document.querySelector(".col5").style.backgroundColor = 'blue';
                 document.querySelector(".col5").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol6() {
                document.querySelector(".col6").style.animation = 'blueA 400ms linear';
                document.querySelector(".col6").style.transform = 'rotateX(180deg)';
                document.querySelector(".col6").style.backgroundColor = 'blue';
                 document.querySelector(".col6").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol7() {
                document.querySelector(".col7").style.animation = 'blueA 400ms linear';
                document.querySelector(".col7").style.transform = 'rotateX(180deg)';
                document.querySelector(".col7").style.backgroundColor = 'blue';
                 document.querySelector(".col7").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol8() {
                document.querySelector(".col8").style.animation = 'blueA 400ms linear';
                document.querySelector(".col8").style.transform = 'rotateX(180deg)';
                document.querySelector(".col8").style.backgroundColor = 'blue';
                 document.querySelector(".col8").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol9() {
                document.querySelector(".col9").style.animation = 'blueA 400ms linear';
                document.querySelector(".col9").style.transform = 'rotateX(180deg)';
                document.querySelector(".col9").style.backgroundColor = 'blue';
                 document.querySelector(".col9").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol10() {
                document.querySelector(".col10").style.animation = 'blueA 400ms linear';
                document.querySelector(".col10").style.transform = 'rotateX(180deg)';
                document.querySelector(".col10").style.backgroundColor = 'blue';
                 document.querySelector(".col10").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol11() {
                document.querySelector(".col11").style.animation = 'blueA 400ms linear';
                document.querySelector(".col11").style.transform = 'rotateX(180deg)';
                document.querySelector(".col11").style.backgroundColor = 'blue';
                 document.querySelector(".col11").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol12() {
                document.querySelector(".col12").style.animation = 'blueA 400ms linear';
                document.querySelector(".col12").style.transform = 'rotateX(180deg)';
                document.querySelector(".col12").style.backgroundColor = 'blue';
                 document.querySelector(".col12").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol13() {
                document.querySelector(".col13").style.animation = 'blueA 400ms linear';
                document.querySelector(".col13").style.transform = 'rotateX(180deg)';
                document.querySelector(".col13").style.backgroundColor = 'blue';
                 document.querySelector(".col13").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol14() {
                document.querySelector(".col14").style.animation = 'blueA 400ms linear';
                document.querySelector(".col14").style.transform = 'rotateX(180deg)';
                document.querySelector(".col14").style.backgroundColor = 'blue';
                 document.querySelector(".col14").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol15() {
                document.querySelector(".col15").style.animation = 'blueA 400ms linear';
                document.querySelector(".col15").style.transform = 'rotateX(180deg)';
                document.querySelector(".col15").style.backgroundColor = 'blue';
                 document.querySelector(".col15").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol16() {
                document.querySelector(".col16").style.animation = 'blueA 400ms linear';
                document.querySelector(".col16").style.transform = 'rotateX(180deg)';
                document.querySelector(".col16").style.backgroundColor = 'blue';
                 document.querySelector(".col16").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol17() {
                document.querySelector(".col17").style.animation = 'blueA 400ms linear';
                document.querySelector(".col17").style.transform = 'rotateX(180deg)';
                document.querySelector(".col17").style.backgroundColor = 'blue';
                 document.querySelector(".col17").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol18() {
                document.querySelector(".col18").style.animation = 'blueA 400ms linear';
                document.querySelector(".col18").style.transform = 'rotateX(180deg)';
                document.querySelector(".col18").style.backgroundColor = 'blue';
                 document.querySelector(".col18").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol19() {
                document.querySelector(".col19").style.animation = 'blueA 400ms linear';
                document.querySelector(".col19").style.transform = 'rotateX(180deg)';
                document.querySelector(".col19").style.backgroundColor = 'blue';
                 document.querySelector(".col19").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol20() {
                document.querySelector(".col20").style.animation = 'blueA 400ms linear';
                document.querySelector(".col20").style.transform = 'rotateX(180deg)';
                document.querySelector(".col20").style.backgroundColor = 'blue';
                 document.querySelector(".col20").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol1() {
                document.querySelector(".col1").style.animation = 'blueA 400ms linear';
                document.querySelector(".col1").style.transform = 'rotateX(180deg)';
                document.querySelector(".col1").style.backgroundColor = 'blue';
                 document.querySelector(".col1").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol22() {
                document.querySelector(".col22").style.animation = 'blueA 400ms linear';
                document.querySelector(".col22").style.transform = 'rotateX(180deg)';
                document.querySelector(".col22").style.backgroundColor = 'blue';
                 document.querySelector(".col22").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol23() {
                document.querySelector(".col23").style.animation = 'blueA 400ms linear';
                document.querySelector(".col23").style.transform = 'rotateX(180deg)';
                document.querySelector(".col23").style.backgroundColor = 'blue';
                 document.querySelector(".col23").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol24() {
                document.querySelector(".col24").style.animation = 'blueA 400ms linear';
                document.querySelector(".col24").style.transform = 'rotateX(180deg)';
                document.querySelector(".col24").style.backgroundColor = 'blue';
                 document.querySelector(".col24").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol25() {
                document.querySelector(".col25").style.animation = 'blueA 400ms linear';
                document.querySelector(".col25").style.transform = 'rotateX(180deg)';
                document.querySelector(".col25").style.backgroundColor = 'blue';
                 document.querySelector(".col25").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
        }
        else if (me == "pCol22"){
            function pCol22() {
                document.querySelector(".col22").style.animation = 'redA 400ms linear';
                document.querySelector(".col22").style.transform = 'rotateX(180deg)';
                document.querySelector(".col22").style.backgroundColor = 'red';

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp2+"</b><br> Проиграл: <b style='color:red;'>"+inp1+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                } else if(name2 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp1+"</b><br> Проиграл: <b style='color:red;'>"+inp2+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                }
            }
            function pCol2() {
                document.querySelector(".col2").style.animation = 'blueA 400ms linear';
                document.querySelector(".col2").style.transform = 'rotateX(180deg)';
                document.querySelector(".col2").style.backgroundColor = 'blue';
                 document.querySelector(".col2").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol3() {
                document.querySelector(".col3").style.animation = 'blueA 400ms linear';
                document.querySelector(".col3").style.transform = 'rotateX(180deg)';
                document.querySelector(".col3").style.backgroundColor = 'blue';
                 document.querySelector(".col3").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol4() {
                document.querySelector(".col4").style.animation = 'blueA 400ms linear';
                document.querySelector(".col4").style.transform = 'rotateX(180deg)';
                document.querySelector(".col4").style.backgroundColor = 'blue';
                 document.querySelector(".col4").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol5() {
                document.querySelector(".col5").style.animation = 'blueA 400ms linear';
                document.querySelector(".col5").style.transform = 'rotateX(180deg)';
                document.querySelector(".col5").style.backgroundColor = 'blue';
                 document.querySelector(".col5").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol6() {
                document.querySelector(".col6").style.animation = 'blueA 400ms linear';
                document.querySelector(".col6").style.transform = 'rotateX(180deg)';
                document.querySelector(".col6").style.backgroundColor = 'blue';
                 document.querySelector(".col6").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol7() {
                document.querySelector(".col7").style.animation = 'blueA 400ms linear';
                document.querySelector(".col7").style.transform = 'rotateX(180deg)';
                document.querySelector(".col7").style.backgroundColor = 'blue';
                 document.querySelector(".col7").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol8() {
                document.querySelector(".col8").style.animation = 'blueA 400ms linear';
                document.querySelector(".col8").style.transform = 'rotateX(180deg)';
                document.querySelector(".col8").style.backgroundColor = 'blue';
                 document.querySelector(".col8").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol9() {
                document.querySelector(".col9").style.animation = 'blueA 400ms linear';
                document.querySelector(".col9").style.transform = 'rotateX(180deg)';
                document.querySelector(".col9").style.backgroundColor = 'blue';
                 document.querySelector(".col9").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol10() {
                document.querySelector(".col10").style.animation = 'blueA 400ms linear';
                document.querySelector(".col10").style.transform = 'rotateX(180deg)';
                document.querySelector(".col10").style.backgroundColor = 'blue';
                 document.querySelector(".col10").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol11() {
                document.querySelector(".col11").style.animation = 'blueA 400ms linear';
                document.querySelector(".col11").style.transform = 'rotateX(180deg)';
                document.querySelector(".col11").style.backgroundColor = 'blue';
                 document.querySelector(".col11").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol12() {
                document.querySelector(".col12").style.animation = 'blueA 400ms linear';
                document.querySelector(".col12").style.transform = 'rotateX(180deg)';
                document.querySelector(".col12").style.backgroundColor = 'blue';
                 document.querySelector(".col12").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol13() {
                document.querySelector(".col13").style.animation = 'blueA 400ms linear';
                document.querySelector(".col13").style.transform = 'rotateX(180deg)';
                document.querySelector(".col13").style.backgroundColor = 'blue';
                 document.querySelector(".col13").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol14() {
                document.querySelector(".col14").style.animation = 'blueA 400ms linear';
                document.querySelector(".col14").style.transform = 'rotateX(180deg)';
                document.querySelector(".col14").style.backgroundColor = 'blue';
                 document.querySelector(".col14").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol15() {
                document.querySelector(".col15").style.animation = 'blueA 400ms linear';
                document.querySelector(".col15").style.transform = 'rotateX(180deg)';
                document.querySelector(".col15").style.backgroundColor = 'blue';
                 document.querySelector(".col15").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol16() {
                document.querySelector(".col16").style.animation = 'blueA 400ms linear';
                document.querySelector(".col16").style.transform = 'rotateX(180deg)';
                document.querySelector(".col16").style.backgroundColor = 'blue';
                 document.querySelector(".col16").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol17() {
                document.querySelector(".col17").style.animation = 'blueA 400ms linear';
                document.querySelector(".col17").style.transform = 'rotateX(180deg)';
                document.querySelector(".col17").style.backgroundColor = 'blue';
                 document.querySelector(".col17").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol18() {
                document.querySelector(".col18").style.animation = 'blueA 400ms linear';
                document.querySelector(".col18").style.transform = 'rotateX(180deg)';
                document.querySelector(".col18").style.backgroundColor = 'blue';
                 document.querySelector(".col18").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol19() {
                document.querySelector(".col19").style.animation = 'blueA 400ms linear';
                document.querySelector(".col19").style.transform = 'rotateX(180deg)';
                document.querySelector(".col19").style.backgroundColor = 'blue';
                 document.querySelector(".col19").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol20() {
                document.querySelector(".col20").style.animation = 'blueA 400ms linear';
                document.querySelector(".col20").style.transform = 'rotateX(180deg)';
                document.querySelector(".col20").style.backgroundColor = 'blue';
                 document.querySelector(".col20").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol21() {
                document.querySelector(".col21").style.animation = 'blueA 400ms linear';
                document.querySelector(".col21").style.transform = 'rotateX(180deg)';
                document.querySelector(".col21").style.backgroundColor = 'blue';
                 document.querySelector(".col21").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol1() {
                document.querySelector(".col1").style.animation = 'blueA 400ms linear';
                document.querySelector(".col1").style.transform = 'rotateX(180deg)';
                document.querySelector(".col1").style.backgroundColor = 'blue';
                 document.querySelector(".col1").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol23() {
                document.querySelector(".col23").style.animation = 'blueA 400ms linear';
                document.querySelector(".col23").style.transform = 'rotateX(180deg)';
                document.querySelector(".col23").style.backgroundColor = 'blue';
                 document.querySelector(".col23").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol24() {
                document.querySelector(".col24").style.animation = 'blueA 400ms linear';
                document.querySelector(".col24").style.transform = 'rotateX(180deg)';
                document.querySelector(".col24").style.backgroundColor = 'blue';
                 document.querySelector(".col24").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol25() {
                document.querySelector(".col25").style.animation = 'blueA 400ms linear';
                document.querySelector(".col25").style.transform = 'rotateX(180deg)';
                document.querySelector(".col25").style.backgroundColor = 'blue';
                 document.querySelector(".col25").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
        }
        else if (me == "pCol23"){
            function pCol23() {
                document.querySelector(".col23").style.animation = 'redA 400ms linear';
                document.querySelector(".col23").style.transform = 'rotateX(180deg)';
                document.querySelector(".col23").style.backgroundColor = 'red';

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp2+"</b><br> Проиграл: <b style='color:red;'>"+inp1+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                } else if(name2 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp1+"</b><br> Проиграл: <b style='color:red;'>"+inp2+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                }
            }
            function pCol2() {
                document.querySelector(".col2").style.animation = 'blueA 400ms linear';
                document.querySelector(".col2").style.transform = 'rotateX(180deg)';
                document.querySelector(".col2").style.backgroundColor = 'blue';
                 document.querySelector(".col2").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol3() {
                document.querySelector(".col3").style.animation = 'blueA 400ms linear';
                document.querySelector(".col3").style.transform = 'rotateX(180deg)';
                document.querySelector(".col3").style.backgroundColor = 'blue';
                 document.querySelector(".col3").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol4() {
                document.querySelector(".col4").style.animation = 'blueA 400ms linear';
                document.querySelector(".col4").style.transform = 'rotateX(180deg)';
                document.querySelector(".col4").style.backgroundColor = 'blue';
                 document.querySelector(".col4").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol5() {
                document.querySelector(".col5").style.animation = 'blueA 400ms linear';
                document.querySelector(".col5").style.transform = 'rotateX(180deg)';
                document.querySelector(".col5").style.backgroundColor = 'blue';
                 document.querySelector(".col5").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol6() {
                document.querySelector(".col6").style.animation = 'blueA 400ms linear';
                document.querySelector(".col6").style.transform = 'rotateX(180deg)';
                document.querySelector(".col6").style.backgroundColor = 'blue';
                 document.querySelector(".col6").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol7() {
                document.querySelector(".col7").style.animation = 'blueA 400ms linear';
                document.querySelector(".col7").style.transform = 'rotateX(180deg)';
                document.querySelector(".col7").style.backgroundColor = 'blue';
                 document.querySelector(".col7").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol8() {
                document.querySelector(".col8").style.animation = 'blueA 400ms linear';
                document.querySelector(".col8").style.transform = 'rotateX(180deg)';
                document.querySelector(".col8").style.backgroundColor = 'blue';
                 document.querySelector(".col8").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol9() {
                document.querySelector(".col9").style.animation = 'blueA 400ms linear';
                document.querySelector(".col9").style.transform = 'rotateX(180deg)';
                document.querySelector(".col9").style.backgroundColor = 'blue';
                 document.querySelector(".col9").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol10() {
                document.querySelector(".col10").style.animation = 'blueA 400ms linear';
                document.querySelector(".col10").style.transform = 'rotateX(180deg)';
                document.querySelector(".col10").style.backgroundColor = 'blue';
                 document.querySelector(".col10").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol11() {
                document.querySelector(".col11").style.animation = 'blueA 400ms linear';
                document.querySelector(".col11").style.transform = 'rotateX(180deg)';
                document.querySelector(".col11").style.backgroundColor = 'blue';
                 document.querySelector(".col11").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol12() {
                document.querySelector(".col12").style.animation = 'blueA 400ms linear';
                document.querySelector(".col12").style.transform = 'rotateX(180deg)';
                document.querySelector(".col12").style.backgroundColor = 'blue';
                 document.querySelector(".col12").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol13() {
                document.querySelector(".col13").style.animation = 'blueA 400ms linear';
                document.querySelector(".col13").style.transform = 'rotateX(180deg)';
                document.querySelector(".col13").style.backgroundColor = 'blue';
                 document.querySelector(".col13").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol14() {
                document.querySelector(".col14").style.animation = 'blueA 400ms linear';
                document.querySelector(".col14").style.transform = 'rotateX(180deg)';
                document.querySelector(".col14").style.backgroundColor = 'blue';
                 document.querySelector(".col14").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol15() {
                document.querySelector(".col15").style.animation = 'blueA 400ms linear';
                document.querySelector(".col15").style.transform = 'rotateX(180deg)';
                document.querySelector(".col15").style.backgroundColor = 'blue';
                 document.querySelector(".col15").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol16() {
                document.querySelector(".col16").style.animation = 'blueA 400ms linear';
                document.querySelector(".col16").style.transform = 'rotateX(180deg)';
                document.querySelector(".col16").style.backgroundColor = 'blue';
                 document.querySelector(".col16").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol17() {
                document.querySelector(".col17").style.animation = 'blueA 400ms linear';
                document.querySelector(".col17").style.transform = 'rotateX(180deg)';
                document.querySelector(".col17").style.backgroundColor = 'blue';
                 document.querySelector(".col17").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol18() {
                document.querySelector(".col18").style.animation = 'blueA 400ms linear';
                document.querySelector(".col18").style.transform = 'rotateX(180deg)';
                document.querySelector(".col18").style.backgroundColor = 'blue';
                 document.querySelector(".col18").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol19() {
                document.querySelector(".col19").style.animation = 'blueA 400ms linear';
                document.querySelector(".col19").style.transform = 'rotateX(180deg)';
                document.querySelector(".col19").style.backgroundColor = 'blue';
                 document.querySelector(".col19").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol20() {
                document.querySelector(".col20").style.animation = 'blueA 400ms linear';
                document.querySelector(".col20").style.transform = 'rotateX(180deg)';
                document.querySelector(".col20").style.backgroundColor = 'blue';
                 document.querySelector(".col20").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol21() {
                document.querySelector(".col21").style.animation = 'blueA 400ms linear';
                document.querySelector(".col21").style.transform = 'rotateX(180deg)';
                document.querySelector(".col21").style.backgroundColor = 'blue';
                 document.querySelector(".col21").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol22() {
                document.querySelector(".col22").style.animation = 'blueA 400ms linear';
                document.querySelector(".col22").style.transform = 'rotateX(180deg)';
                document.querySelector(".col22").style.backgroundColor = 'blue';
                 document.querySelector(".col22").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol1() {
                document.querySelector(".col1").style.animation = 'blueA 400ms linear';
                document.querySelector(".col1").style.transform = 'rotateX(180deg)';
                document.querySelector(".col1").style.backgroundColor = 'blue';
                 document.querySelector(".col1").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol24() {
                document.querySelector(".col24").style.animation = 'blueA 400ms linear';
                document.querySelector(".col24").style.transform = 'rotateX(180deg)';
                document.querySelector(".col24").style.backgroundColor = 'blue';
                 document.querySelector(".col24").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol25() {
                document.querySelector(".col25").style.animation = 'blueA 400ms linear';
                document.querySelector(".col25").style.transform = 'rotateX(180deg)';
                document.querySelector(".col25").style.backgroundColor = 'blue';
                 document.querySelector(".col25").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
        }
        else if (me == "pCol24"){
            function pCol24() {
                document.querySelector(".col24").style.animation = 'redA 400ms linear';
                document.querySelector(".col24").style.transform = 'rotateX(180deg)';
                document.querySelector(".col24").style.backgroundColor = 'red';

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp2+"</b><br> Проиграл: <b style='color:red;'>"+inp1+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                } else if(name2 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp1+"</b><br> Проиграл: <b style='color:red;'>"+inp2+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                }
            }
            function pCol2() {
                document.querySelector(".col2").style.animation = 'blueA 400ms linear';
                document.querySelector(".col2").style.transform = 'rotateX(180deg)';
                document.querySelector(".col2").style.backgroundColor = 'blue';
                 document.querySelector(".col2").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol3() {
                document.querySelector(".col3").style.animation = 'blueA 400ms linear';
                document.querySelector(".col3").style.transform = 'rotateX(180deg)';
                document.querySelector(".col3").style.backgroundColor = 'blue';
                 document.querySelector(".col3").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol4() {
                document.querySelector(".col4").style.animation = 'blueA 400ms linear';
                document.querySelector(".col4").style.transform = 'rotateX(180deg)';
                document.querySelector(".col4").style.backgroundColor = 'blue';
                 document.querySelector(".col4").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol5() {
                document.querySelector(".col5").style.animation = 'blueA 400ms linear';
                document.querySelector(".col5").style.transform = 'rotateX(180deg)';
                document.querySelector(".col5").style.backgroundColor = 'blue';
                 document.querySelector(".col5").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol6() {
                document.querySelector(".col6").style.animation = 'blueA 400ms linear';
                document.querySelector(".col6").style.transform = 'rotateX(180deg)';
                document.querySelector(".col6").style.backgroundColor = 'blue';
                 document.querySelector(".col6").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol7() {
                document.querySelector(".col7").style.animation = 'blueA 400ms linear';
                document.querySelector(".col7").style.transform = 'rotateX(180deg)';
                document.querySelector(".col7").style.backgroundColor = 'blue';
                 document.querySelector(".col7").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol8() {
                document.querySelector(".col8").style.animation = 'blueA 400ms linear';
                document.querySelector(".col8").style.transform = 'rotateX(180deg)';
                document.querySelector(".col8").style.backgroundColor = 'blue';
                 document.querySelector(".col8").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol9() {
                document.querySelector(".col9").style.animation = 'blueA 400ms linear';
                document.querySelector(".col9").style.transform = 'rotateX(180deg)';
                document.querySelector(".col9").style.backgroundColor = 'blue';
                 document.querySelector(".col9").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol10() {
                document.querySelector(".col10").style.animation = 'blueA 400ms linear';
                document.querySelector(".col10").style.transform = 'rotateX(180deg)';
                document.querySelector(".col10").style.backgroundColor = 'blue';
                 document.querySelector(".col10").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol11() {
                document.querySelector(".col11").style.animation = 'blueA 400ms linear';
                document.querySelector(".col11").style.transform = 'rotateX(180deg)';
                document.querySelector(".col11").style.backgroundColor = 'blue';
                 document.querySelector(".col11").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol12() {
                document.querySelector(".col12").style.animation = 'blueA 400ms linear';
                document.querySelector(".col12").style.transform = 'rotateX(180deg)';
                document.querySelector(".col12").style.backgroundColor = 'blue';
                 document.querySelector(".col12").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol13() {
                document.querySelector(".col13").style.animation = 'blueA 400ms linear';
                document.querySelector(".col13").style.transform = 'rotateX(180deg)';
                document.querySelector(".col13").style.backgroundColor = 'blue';
                 document.querySelector(".col13").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol14() {
                document.querySelector(".col14").style.animation = 'blueA 400ms linear';
                document.querySelector(".col14").style.transform = 'rotateX(180deg)';
                document.querySelector(".col14").style.backgroundColor = 'blue';
                 document.querySelector(".col14").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol15() {
                document.querySelector(".col15").style.animation = 'blueA 400ms linear';
                document.querySelector(".col15").style.transform = 'rotateX(180deg)';
                document.querySelector(".col15").style.backgroundColor = 'blue';
                 document.querySelector(".col15").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol16() {
                document.querySelector(".col16").style.animation = 'blueA 400ms linear';
                document.querySelector(".col16").style.transform = 'rotateX(180deg)';
                document.querySelector(".col16").style.backgroundColor = 'blue';
                 document.querySelector(".col16").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol17() {
                document.querySelector(".col17").style.animation = 'blueA 400ms linear';
                document.querySelector(".col17").style.transform = 'rotateX(180deg)';
                document.querySelector(".col17").style.backgroundColor = 'blue';
                 document.querySelector(".col17").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol18() {
                document.querySelector(".col18").style.animation = 'blueA 400ms linear';
                document.querySelector(".col18").style.transform = 'rotateX(180deg)';
                document.querySelector(".col18").style.backgroundColor = 'blue';
                 document.querySelector(".col18").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol19() {
                document.querySelector(".col19").style.animation = 'blueA 400ms linear';
                document.querySelector(".col19").style.transform = 'rotateX(180deg)';
                document.querySelector(".col19").style.backgroundColor = 'blue';
                 document.querySelector(".col19").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol20() {
                document.querySelector(".col20").style.animation = 'blueA 400ms linear';
                document.querySelector(".col20").style.transform = 'rotateX(180deg)';
                document.querySelector(".col20").style.backgroundColor = 'blue';
                 document.querySelector(".col20").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol21() {
                document.querySelector(".col21").style.animation = 'blueA 400ms linear';
                document.querySelector(".col21").style.transform = 'rotateX(180deg)';
                document.querySelector(".col21").style.backgroundColor = 'blue';
                 document.querySelector(".col21").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol22() {
                document.querySelector(".col22").style.animation = 'blueA 400ms linear';
                document.querySelector(".col22").style.transform = 'rotateX(180deg)';
                document.querySelector(".col22").style.backgroundColor = 'blue';
                 document.querySelector(".col22").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol23() {
                document.querySelector(".col23").style.animation = 'blueA 400ms linear';
                document.querySelector(".col23").style.transform = 'rotateX(180deg)';
                document.querySelector(".col23").style.backgroundColor = 'blue';
                 document.querySelector(".col23").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol1() {
                document.querySelector(".col1").style.animation = 'blueA 400ms linear';
                document.querySelector(".col1").style.transform = 'rotateX(180deg)';
                document.querySelector(".col1").style.backgroundColor = 'blue';
                 document.querySelector(".col1").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol25() {
                document.querySelector(".col25").style.animation = 'blueA 400ms linear';
                document.querySelector(".col25").style.transform = 'rotateX(180deg)';
                document.querySelector(".col25").style.backgroundColor = 'blue';
                 document.querySelector(".col25").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
        }
        else if (me == "pCol25"){
            function pCol25() {
                document.querySelector(".col25").style.animation = 'redA 400ms linear';
                document.querySelector(".col25").style.transform = 'rotateX(180deg)';
                document.querySelector(".col25").style.backgroundColor = 'red';

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp2+"</b><br> Проиграл: <b style='color:red;'>"+inp1+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                } else if(name2 == "1") {
                    let name1 = document.getElementById("name1");
                    let name2 = document.getElementById("name2");
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    let inp1 = urlParams.get('nameF');
                    let inp2 = urlParams.get('nameS');
                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "none";
                    document.getElementById('sayWho').innerHTML = "Победил: <b style='color:green;'>"+inp1+"</b><br> Проиграл: <b style='color:red;'>"+inp2+"</b> <br>  <button class='btn' onclick=' meTo()'>Ещё раз</button>";
                }
            }
            function pCol2() {
                document.querySelector(".col2").style.animation = 'blueA 400ms linear';
                document.querySelector(".col2").style.transform = 'rotateX(180deg)';
                document.querySelector(".col2").style.backgroundColor = 'blue';
                 document.querySelector(".col2").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol3() {
                document.querySelector(".col3").style.animation = 'blueA 400ms linear';
                document.querySelector(".col3").style.transform = 'rotateX(180deg)';
                document.querySelector(".col3").style.backgroundColor = 'blue';
                 document.querySelector(".col3").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol4() {
                document.querySelector(".col4").style.animation = 'blueA 400ms linear';
                document.querySelector(".col4").style.transform = 'rotateX(180deg)';
                document.querySelector(".col4").style.backgroundColor = 'blue';
                 document.querySelector(".col4").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol5() {
                document.querySelector(".col5").style.animation = 'blueA 400ms linear';
                document.querySelector(".col5").style.transform = 'rotateX(180deg)';
                document.querySelector(".col5").style.backgroundColor = 'blue';
                 document.querySelector(".col5").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol6() {
                document.querySelector(".col6").style.animation = 'blueA 400ms linear';
                document.querySelector(".col6").style.transform = 'rotateX(180deg)';
                document.querySelector(".col6").style.backgroundColor = 'blue';
                 document.querySelector(".col6").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol7() {
                document.querySelector(".col7").style.animation = 'blueA 400ms linear';
                document.querySelector(".col7").style.transform = 'rotateX(180deg)';
                document.querySelector(".col7").style.backgroundColor = 'blue';
                 document.querySelector(".col7").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol8() {
                document.querySelector(".col8").style.animation = 'blueA 400ms linear';
                document.querySelector(".col8").style.transform = 'rotateX(180deg)';
                document.querySelector(".col8").style.backgroundColor = 'blue';
                 document.querySelector(".col8").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol9() {
                document.querySelector(".col9").style.animation = 'blueA 400ms linear';
                document.querySelector(".col9").style.transform = 'rotateX(180deg)';
                document.querySelector(".col9").style.backgroundColor = 'blue';
                 document.querySelector(".col9").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol10() {
                document.querySelector(".col10").style.animation = 'blueA 400ms linear';
                document.querySelector(".col10").style.transform = 'rotateX(180deg)';
                document.querySelector(".col10").style.backgroundColor = 'blue';
                 document.querySelector(".col10").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol11() {
                document.querySelector(".col11").style.animation = 'blueA 400ms linear';
                document.querySelector(".col11").style.transform = 'rotateX(180deg)';
                document.querySelector(".col11").style.backgroundColor = 'blue';
                 document.querySelector(".col11").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol12() {
                document.querySelector(".col12").style.animation = 'blueA 400ms linear';
                document.querySelector(".col12").style.transform = 'rotateX(180deg)';
                document.querySelector(".col12").style.backgroundColor = 'blue';
                 document.querySelector(".col12").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol13() {
                document.querySelector(".col13").style.animation = 'blueA 400ms linear';
                document.querySelector(".col13").style.transform = 'rotateX(180deg)';
                document.querySelector(".col13").style.backgroundColor = 'blue';
                 document.querySelector(".col13").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol14() {
                document.querySelector(".col14").style.animation = 'blueA 400ms linear';
                document.querySelector(".col14").style.transform = 'rotateX(180deg)';
                document.querySelector(".col14").style.backgroundColor = 'blue';
                 document.querySelector(".col14").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol15() {
                document.querySelector(".col15").style.animation = 'blueA 400ms linear';
                document.querySelector(".col15").style.transform = 'rotateX(180deg)';
                document.querySelector(".col15").style.backgroundColor = 'blue';
                 document.querySelector(".col15").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol16() {
                document.querySelector(".col16").style.animation = 'blueA 400ms linear';
                document.querySelector(".col16").style.transform = 'rotateX(180deg)';
                document.querySelector(".col16").style.backgroundColor = 'blue';
                 document.querySelector(".col16").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol17() {
                document.querySelector(".col17").style.animation = 'blueA 400ms linear';
                document.querySelector(".col17").style.transform = 'rotateX(180deg)';
                document.querySelector(".col17").style.backgroundColor = 'blue';
                 document.querySelector(".col17").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol18() {
                document.querySelector(".col18").style.animation = 'blueA 400ms linear';
                document.querySelector(".col18").style.transform = 'rotateX(180deg)';
                document.querySelector(".col18").style.backgroundColor = 'blue';
                 document.querySelector(".col18").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol19() {
                document.querySelector(".col19").style.animation = 'blueA 400ms linear';
                document.querySelector(".col19").style.transform = 'rotateX(180deg)';
                document.querySelector(".col19").style.backgroundColor = 'blue';
                 document.querySelector(".col19").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol20() {
                document.querySelector(".col20").style.animation = 'blueA 400ms linear';
                document.querySelector(".col20").style.transform = 'rotateX(180deg)';
                document.querySelector(".col20").style.backgroundColor = 'blue';
                 document.querySelector(".col20").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol21() {
                document.querySelector(".col21").style.animation = 'blueA 400ms linear';
                document.querySelector(".col21").style.transform = 'rotateX(180deg)';
                document.querySelector(".col21").style.backgroundColor = 'blue';
                 document.querySelector(".col21").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol22() {
                document.querySelector(".col22").style.animation = 'blueA 400ms linear';
                document.querySelector(".col22").style.transform = 'rotateX(180deg)';
                document.querySelector(".col22").style.backgroundColor = 'blue';
                 document.querySelector(".col22").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol23() {
                document.querySelector(".col23").style.animation = 'blueA 400ms linear';
                document.querySelector(".col23").style.transform = 'rotateX(180deg)';
                document.querySelector(".col23").style.backgroundColor = 'blue';
                 document.querySelector(".col23").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol24() {
                document.querySelector(".col24").style.animation = 'blueA 400ms linear';
                document.querySelector(".col24").style.transform = 'rotateX(180deg)';
                document.querySelector(".col24").style.backgroundColor = 'blue';
                 document.querySelector(".col24").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
            function pCol1() {
                document.querySelector(".col1").style.animation = 'blueA 400ms linear';
                document.querySelector(".col1").style.transform = 'rotateX(180deg)';
                document.querySelector(".col1").style.backgroundColor = 'blue';
                 document.querySelector(".col1").style.borderRadius = "20px";

                let name1 = document.getElementById("name1").value;
                let name2 = document.getElementById("name2").value;
                if (name1 == "1") {
                    document.getElementById("name1").value = 0;
                    document.getElementById("name2").value = 1;

                    document.getElementById("name1").style.display = "none";
                    document.getElementById("name2").style.display = "block";
                } else if(name2 == "1") {
                    document.getElementById("name1").value = 1;
                    document.getElementById("name2").value = 0;

                    document.getElementById("name1").style.display = "block";
                    document.getElementById("name2").style.display = "none";
                }
            }
        }
        function meTo() {
            location.reload();
        }