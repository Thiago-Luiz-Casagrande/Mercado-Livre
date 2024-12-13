
function pop(){
    
                window.onscroll = function() {
                  var caixa1 = document.getElementById("caixa1");
                  var caixa2 = document.getElementById("caixa2");
            
                  var posicaoCaixa1 = 180; // Posição original do primeiro elemento
                  var limite1 = 350; // Limite até quando o primeiro elemento deve ficar fixo
            
                  var posicaoCaixa2 = 180; // Posição original do segundo elemento
                  var limite2 = 220; // Limite até quando o segundo elemento deve ficar fixo
            
                  // Primeiro elemento: fixa entre sua posição original e o limite1
                  if (window.pageYOffset > posicaoCaixa1 && window.pageYOffset < limite1) {
                    caixa1.classList.add("fixa");
                    caixa1.classList.remove("final"); // Remove a posição final enquanto está na área fixa
                } else if (window.pageYOffset >= limite2) {
                    // Ao atingir o limite, aplica a nova posição "final"
                    caixa1.classList.remove("fixa");
                    caixa1.classList.add("final");
                } else {
                    caixa1.classList.remove("fixa");
                    caixa1.classList.remove("final");
                }
            
                  // Segundo elemento: fixa entre sua posição original e o limite2
                  if (window.pageYOffset > posicaoCaixa2 && window.pageYOffset < limite2) {
                    caixa2.classList.add("fixa2");
                    caixa2.classList.remove("final2"); // Remove a posição final enquanto está na área fixa
                } else if (window.pageYOffset >= limite2) {
                    // Ao atingir o limite, aplica a nova posição "final"
                    caixa2.classList.remove("fixa2");
                    caixa2.classList.add("final2");
                } else {
                    caixa2.classList.remove("fixa2");
                    caixa2.classList.remove("final2");
                }
                };
            }

            function pop2(){

            return (
                                       // Função para abrir o popup
                            function abrirPopup() {
                                document.getElementById("overlay").style.display = "flex";
                            }
                    
                            // Função para fechar o popup
                            function fecharPopup() {
                                document.getElementById("overlay").style.display = "none";
                            }
                            
                    <button onclick="abrirPopup()" class="tiposDeEntrega">Mais formas de entrega</button><br><br>

                        <div id="overlay" class="overlay">
                        <div class="popup">
                            <div style="height: 130%;">
                                <button class="close-btn" onclick="fecharPopup()">X</button>
                            <p style="font-size: 28px;">Opções de frete e retirada</p>
                            <p >Calculamos os custos e prazos para este endereço:</p><br>
                            <div class="seuEndereco">
                                <p>seuEndereco</p>
                            </div><br><br>
                
                            <p style="font-weight: bolder;">Receber Compra:</p><br>
                            <p class="precoFreteEntrega">R$<span>0</span></p>
                            <p>Chegará <span style="font-weight: bolder;">quarta-feira</span> no seu endereço</p><br>
                            
                            <hr style="color: gray; height: 1px;">
                            <p style="font-weight: bolder;">Retirar compra:</p><br>
                            <p class="precoFreteEntrega">R$<span>0</span></p>
                            <p>Retire a partir de <span style="font-weight: bolder;">segunda-feira</span> em uma agência Mercado Livre</p>
                            <a href="https://www.google.com.br/maps/" style="color: blue; font-size: 13px; text-decoration: none;">Ver mapa</a>
                
                <br><br>
                            </div>
                        </div>
                        )}