// Função para abrir o modal de pagamento
  function openPaymentModal() {
    const modal = document.getElementById("paymentModal");
    modal.style.display = "block";
  }

  // Função para fechar o modal de pagamento
  function closePaymentModal() {
    const modal = document.getElementById("paymentModal");
    modal.style.display = "none";
  }

  // Função para completar a compra com base na forma de pagamento selecionada
  function completePurchase() {
    const paymentMethod = document.getElementById("paymentMethod").value;
    // Adicionar a lógica para processar o pagamento com base na forma selecionada

    // Lógica de pagamento
    if (paymentMethod === "creditCard") {
      // Processar pagamento com cartão de crédito
    } else if (paymentMethod === "paypal") {
      // Processar pagamento com PayPal
    } else if (paymentMethod === "bankTransfer") {
      // Processar pagamento por transferência bancária
    }

    // Fechar o modal após a conclusão da compra
    closePaymentModal();
  }

  // Função para atualizar as informações do bolo
  function updateCakeInfo() {
    const cakeSelect = document.getElementById("cakeSelect");
    const cakeDescription = document.getElementById("cakeDescription");
    const cakeImage = document.getElementById("cakeImage");
    const priceElement = document.getElementById("price");

    if (cakeSelect.value === "chocolate") {
      cakeDescription.textContent = "Bolo de chocolate caseiro.";
      cakeImage.src = "https://bakeandcakegourmet.com.br/uploads/site/receitas/bolo-de-chocolate-facil-e-barato-rspxk8nc.jpg";
      priceElement.textContent = "Preço: R$ 15,00";
    } else if (cakeSelect.value === "morango") {
      cakeDescription.textContent = "Bolo de Morango fresco e saboroso.";
      cakeImage.src = "https://anamariabraga.globo.com/wp-content/uploads/2023/06/bolos-caseiros.jpg";
      priceElement.textContent = "Preço: R$ 24,40";
    } else if (cakeSelect.value === "baunilha") {
      cakeDescription.textContent = "Bolo de chocolate e frutas bem macio.";
      cakeImage.src = "https://www.montandominhafesta.com.br/wp-content/uploads/2019/06/57462965_169330037402076_5083003802467339621_n-1024x966.jpg";
      priceElement.textContent = "Preço: R$ 147,00";
    } else if (cakeSelect.value === "laranja") {
      cakeDescription.textContent = "Bolo de Morango refrescante.";
      cakeImage.src = "https://confeitariaiceland.com.br/wp-content/uploads/2020/06/morango-1.jpg";
      priceElement.textContent = "Preço: R$ 62,10";
    } else if (cakeSelect.value === "limao") {
      cakeDescription.textContent = "Bolo de Churros delicioso.";
      cakeImage.src = "https://www.sabornamesa.com.br/media/k2/items/cache/27dd7cddd3c2da4d8b388b00e3c63c22_XL.jpg";
      priceElement.textContent = "Preço: R$ 21,92";
    } else if (cakeSelect.value === "coco") {
      cakeDescription.textContent = "Bolo Personalizado tema Palmeiras com Papel de Arroz Sabor Brigadeiro Belga.";
      cakeImage.src = "https://www.tuacasa.com.br/wp-content/uploads/2020/02/bolo-do-palmeiras-33-730x730.jpg";
      priceElement.textContent = "Preço: R$ 54,60";
    } else if (cakeSelect.value === "amendoim") {
      cakeDescription.textContent = "Bolo de Coco gelado.";
      cakeImage.src = "https://www.padariarequinte.com.br/wp-content/uploads/2021/07/coco-fresco-1.png";
      priceElement.textContent = "Preço: R$ 60,90";
    }
  }

  // Função para atualizar o preço com base na quantidade
  function updatePrice() {
    const quantity = document.getElementById("quantity").value;
    const cakeSelect = document.getElementById("cakeSelect");
    const selectedOption = cakeSelect.options[cakeSelect.selectedIndex];
    const price = parseFloat(selectedOption.getAttribute("data-price"));
    const totalPrice = quantity * price;

    const priceElement = document.getElementById("price");
    priceElement.textContent = "Preço: R$ " + totalPrice.toFixed(2);
  }