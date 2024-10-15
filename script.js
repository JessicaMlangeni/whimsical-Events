function updateTotal() {
    const standardPrice = 50;
    const vipPrice = 100;
    const familyPrice = 180;

    const standardCount = parseInt(document.getElementById('standard').value) || 0;
    const vipCount = parseInt(document.getElementById('vip').value) || 0;
    const familyCount = parseInt(document.getElementById('family').value) || 0;

    const totalPrice = (standardCount * standardPrice) + (vipCount * vipPrice) + (familyCount * familyPrice);
    document.getElementById('totalPrice').innerText = $${totalPrice};
}