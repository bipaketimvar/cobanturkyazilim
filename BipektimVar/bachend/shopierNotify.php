<?php
// public/shopierNotify.php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'POST' || isset($_REQUEST['price'])) {
    
    $orderId = !empty($_REQUEST['orderId']) ? $_REQUEST['orderId'] : 'BPK-' . time();
    $price = !empty($_REQUEST['price']) ? floatval($_REQUEST['price']) : 0;
    $buyerName = !empty($_REQUEST['buyerName']) ? $_REQUEST['buyerName'] : 'Musteri';
    $buyerPhone = !empty($_REQUEST['buyerPhone']) ? $_REQUEST['buyerPhone'] : '05555555555';

    if ($price <= 0) {
        die("Hata: Gecersiz siparis tutari.");
    }

    // Shopier Panelinizden Aldığınız Anahtarlar
    $apiKey = "BURAYA_SHOPIER_API_KEY";
    $apiSecret = "BURAYA_SHOPIER_SECRET_KEY";

    $formattedPrice = number_format($price, 2, '.', '');
    $randomNr = rand(100000, 999999);
    $currency = "0"; // 0: TRY

    $shopierParams = array(
        'API_key' => $apiKey,
        'website_index' => '1',
        'platform_order_id' => $orderId,
        'product_name' => 'BipektimVar Kurye Hizmeti',
        'product_type' => '1',
        'buyer_name' => $buyerName,
        'buyer_phone' => $buyerPhone,
        'buyer_email' => 'musteri@bipektimvar.com',
        'buyer_account_age' => '0',
        'buyer_id_nr' => '11111111111',
        'billing_address' => 'Samsun Merkez',
        'billing_city' => 'Samsun',
        'billing_country' => 'Turkey',
        'billing_postcode' => '55000',
        'shipping_address' => 'Samsun Merkez',
        'shipping_city' => 'Samsun',
        'shipping_country' => 'Turkey',
        'shipping_postcode' => '55000',
        'total_order_value' => $formattedPrice,
        'currency' => $currency,
        'current_language' => '0',
        'modul_version' => '1.0.4',
        'random_nr' => (string)$randomNr
    );

    // HMAC SHA256 İmzası
    $signatureData = $shopierParams['random_nr'] . $shopierParams['platform_order_id'] . $shopierParams['total_order_value'] . $shopierParams['currency'];
    $signature = hash_hmac('sha256', $signatureData, $apiSecret, true);
    $signature = base64_encode($signature);

    $shopierParams['signature'] = $signature;

    echo '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Shopier Yönlendiriliyor...</title></head><body style="background:#050c08; color:#fff; font-family:sans-serif; text-align:center; padding-top:100px;">';
    echo '<h2>Güvenli Ödeme Sayfasına Yönlendiriliyorsunuz...</h2>';
    echo '<form id="shopierForm" method="POST" action="https://www.shopier.com/ShowProduct/api_pay4.php">';
    foreach ($shopierParams as $key => $value) {
        echo '<input type="hidden" name="' . htmlspecialchars($key) . '" value="' . htmlspecialchars($value) . '">';
    }
    echo '</form>';
    echo '<script>document.getElementById("shopierForm").submit();</script>';
    echo '</body></html>';
    exit;
}
?>
  
