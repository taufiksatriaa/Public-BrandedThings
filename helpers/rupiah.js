function Rupiah(angka) {
  const hasil_rupiah = "Rp ".number_format(angka, 2, ",", ".");
  return hasil_rupiah;
}

export default Rupiah;
