import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase B (Kelas 4) Mata Pelajaran MATEMATIKA
 * Lingkup Materi: Bilangan Cacah sampai 10.000, Pecahan Penyebut Sama,
 * Pecahan Desimal Persepuluhan & Perseratusan (6 Soal), serta Pola Gambar & Pola Bilangan
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 30 butir soal Matematika Kelas 4 Kurikulum Merdeka
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Bilangan Cacah sampai 10.000',
    tujuanPembelajaran: 'Peserta didik dapat membaca lambang bilangan cacah sampai 10.000 menggunakan model konkret kubus satuan.',
    indikatorSoal: 'Disajikan gambar susunan kubus ribuan, lempeng ratusan, batang puluhan, dan kubus satuan, peserta didik dapat menentukan lambang bilangan yang tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Bilangan Cacah sampai 10.000',
    tujuanPembelajaran: 'Peserta didik dapat menuliskan lambang bilangan cacah sampai 10.000 dari nama bilangannya.',
    indikatorSoal: 'Disajikan nama bilangan cacah empat angka dalam konteks nomor peserta lomba, peserta didik dapat memilih lambang bilangan yang tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Bilangan Cacah sampai 10.000',
    tujuanPembelajaran: 'Peserta didik dapat menentukan nilai tempat dan nilai angka pada bilangan cacah sampai 10.000.',
    indikatorSoal: 'Disajikan suatu bilangan empat angka, peserta didik dapat mengidentifikasi nilai tempat serta nilai angka pada posisi ratusan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Bilangan Cacah sampai 10.000',
    tujuanPembelajaran: 'Peserta didik dapat menguraikan (dekomposisi) bilangan cacah sampai 10.000 berdasarkan nilai tempatnya.',
    indikatorSoal: 'Disajikan bilangan empat angka yang memiliki angka nol pada posisi puluhan, peserta didik dapat memilih bentuk penjumlahan dekomposisi yang benar.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Bilangan Cacah sampai 10.000',
    tujuanPembelajaran: 'Peserta didik dapat membandingkan dan mengurutkan bilangan cacah sampai 10.000.',
    indikatorSoal: 'Disajikan empat bilangan cacah empat angka dalam data pengunjung perpustakaan, peserta didik dapat mengurutkannya dari yang terkecil ke terbesar.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Bilangan Cacah sampai 10.000',
    tujuanPembelajaran: 'Peserta didik dapat melakukan operasi penjumlahan bilangan cacah sampai 10.000.',
    indikatorSoal: 'Disajikan soal cerita penambahan koleksi buku perpustakaan, peserta didik dapat menghitung hasil penjumlahan bilangan empat angka dengan teknik menyimpan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Bilangan Cacah sampai 10.000',
    tujuanPembelajaran: 'Peserta didik dapat melakukan operasi pengurangan bilangan cacah sampai 10.000.',
    indikatorSoal: 'Disajikan soal cerita penjualan buah dengan persediaan ribuan, peserta didik dapat menentukan sisa persediaan menggunakan pengurangan bersusun.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Bilangan Cacah sampai 10.000',
    tujuanPembelajaran: 'Peserta didik dapat memecahkan masalah sehari-hari berkaitan dengan nilai uang dan operasi hitung bilangan cacah.',
    indikatorSoal: 'Disajikan gambar daftar harga alat tulis di koperasi sekolah, peserta didik dapat menghitung uang kembalian dari Rp10.000 setelah membeli dua barang.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Bilangan Cacah sampai 10.000',
    tujuanPembelajaran: 'Peserta didik dapat melakukan operasi perkalian bilangan cacah dua angka.',
    indikatorSoal: 'Disajikan konteks penyediaan kotak air mineral untuk kegiatan pramuka, peserta didik dapat menghitung hasil perkalian dua bilangan dua angka.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Bilangan Cacah sampai 10.000',
    tujuanPembelajaran: 'Peserta didik dapat melakukan operasi pembagian bilangan cacah.',
    indikatorSoal: 'Disajikan soal cerita pembagian pensil warna secara merata ke beberapa kelompok, peserta didik dapat menentukan banyak benda yang diterima tiap kelompok.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Bilangan Cacah sampai 10.000',
    tujuanPembelajaran: 'Peserta didik dapat menyelesaikan masalah multi-langkah melibatkan penjumlahan dan pembagian bilangan cacah.',
    indikatorSoal: 'Disajikan dua data hasil panen mangga dalam ribuan yang dibagikan sama banyak kepada 5 pedagang, peserta didik dapat menentukan bagian tiap pedagang.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Bilangan Cacah sampai 10.000',
    tujuanPembelajaran: 'Peserta didik dapat menganalisis pembentukan bilangan terbesar dan terkecil serta menghitung selisihnya.',
    indikatorSoal: 'Disajikan empat angka berbeda termasuk angka 0, peserta didik dapat menyusun bilangan 4 angka terbesar dan terkecil lalu menentukan selisihnya.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Pecahan & Desimal',
    tujuanPembelajaran: 'Peserta didik dapat mengidentifikasi dan menyatakan nilai pecahan dari representasi gambar bagian keseluruhan.',
    indikatorSoal: 'Disajikan gambar pizza yang dipotong menjadi 8 bagian sama besar dengan 3 bagian berwarna oranye, peserta didik dapat menentukan bentuk pecahannya.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Pecahan & Desimal',
    tujuanPembelajaran: 'Peserta didik dapat menjumlahkan dua pecahan berpenyebut sama menggunakan model pita pecahan.',
    indikatorSoal: 'Disajikan gambar pita pecahan 7 bagian dengan 2 bagian biru dan 3 bagian hijau, peserta didik dapat menghitung jumlah pecahan bagian yang diwarnai.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Pecahan & Desimal',
    tujuanPembelajaran: 'Peserta didik dapat menghitung pengurangan pecahan dengan penyebut sama dalam kehidupan sehari-hari.',
    indikatorSoal: 'Disajikan soal cerita pemakaian pita sepanjang 4/10 m dari persediaan 9/10 m, peserta didik dapat menentukan panjang sisa pita.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Pecahan & Desimal',
    tujuanPembelajaran: 'Peserta didik dapat mengubah pecahan persepuluhan menjadi bentuk pecahan desimal.',
    indikatorSoal: 'Disajikan pecahan biasa 7/10, peserta didik dapat menentukan penulisan bentuk desimal persepuluhannya dengan benar.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Pecahan & Desimal',
    tujuanPembelajaran: 'Peserta didik dapat menyatakan daerah arsiran pada petak perseratusan menjadi bilangan desimal.',
    indikatorSoal: 'Disajikan gambar petak perseratusan (10 × 10) dengan 35 kotak diarsir biru, peserta didik dapat menuliskan nilai desimal perseratusannya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Pola Gambar & Pola Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat mengidentifikasi dan melanjutkan pola gambar susunan benda yang membesar.',
    indikatorSoal: 'Disajikan gambar pola susunan persegi tahap 1 sampai 4 (2, 5, 8, 11 kotak), peserta didik dapat menentukan banyak kotak pada pola ke-5.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Pola Gambar & Pola Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat menganalisis pola gambar susunan kelereng dengan penambahan bertingkat.',
    indikatorSoal: 'Disajikan gambar pola kelereng segitiga tahap 1 sampai 4 (1, 3, 6, 10), peserta didik dapat menentukan banyak kelereng pada pola ke-5.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Pola Gambar & Pola Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat menentukan suku selanjutnya pada pola gambar bangun datar berulang.',
    indikatorSoal: 'Disajikan pola bangun datar berulang (lingkaran biru, segitiga kuning, persegi hijau), peserta didik dapat menentukan bangun pada posisi ke-11.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Pola Gambar & Pola Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat melengkapi suku yang hilang pada pola bilangan membesar dengan penjumlahan tetap.',
    indikatorSoal: 'Disajikan barisan bilangan kelipatan 7 dengan satu suku rumpang, peserta didik dapat menentukan bilangan pengisi yang tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Pola Gambar & Pola Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat melanjutkan pola bilangan mengecil dengan pengurangan tetap.',
    indikatorSoal: 'Disajikan barisan bilangan menurun dengan selisih -9, peserta didik dapat menentukan dua bilangan berikutnya secara berurutan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Pola Gambar & Pola Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat mengidentifikasi aturan pembentukan suatu pola bilangan.',
    indikatorSoal: 'Disajikan barisan bilangan 3, 6, 12, 24, 48, peserta didik dapat menyimpulkan aturan perkalian pola bilangan tersebut.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Pola Gambar & Pola Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat menyelesaikan masalah kontekstual yang berkaitan dengan pola bilangan membesar.',
    indikatorSoal: 'Disajikan catatan tabungan mingguan yang bertambah tetap Rp1.500 mulai Rp2.000, peserta didik dapat menghitung besar tabungan pada minggu ke-6.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Pola Gambar & Pola Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat memecahkan masalah susunan objek menggunakan pola bilangan.',
    indikatorSoal: 'Disajikan pola penataan kursi tiap baris (10, 14, 18, ...), peserta didik dapat menentukan banyak kursi pada baris ke-7.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Bilangan Cacah sampai 10.000',
    tujuanPembelajaran: 'Peserta didik dapat mengevaluasi nilai tempat dan perbandingan dua bilangan cacah sampai 10.000.',
    indikatorSoal: 'Disajikan dua bilangan empat angka beserta 2 pernyataan mengenai nilai tempat dan perbandingan besarnya, peserta didik dapat menentukan nilai Benar/Salah tiap pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 2,
  },
  27: {
    elemen: 'Bilangan Cacah sampai 10.000',
    tujuanPembelajaran: 'Peserta didik dapat mengevaluasi hasil operasi hitung pengurangan dan penjumlahan bertahap bilangan cacah.',
    indikatorSoal: 'Disajikan narasi stok buku koperasi sekolah beserta 2 pernyataan hasil hitung bertahap, peserta didik dapat menilai kebenaran (Benar/Salah) masing-masing pernyataan.',
    levelKognitif: 'L3',
    bobotSkor: 2,
  },
  28: {
    elemen: 'Pecahan & Desimal',
    tujuanPembelajaran: 'Peserta didik dapat membandingkan pecahan berpenyebut sama dan membedakan desimal persepuluhan dengan perseratusan.',
    indikatorSoal: 'Disajikan 2 pernyataan tentang perbandingan pecahan 5/8 vs 3/8 dan bentuk desimal 4/100, peserta didik dapat menentukan kebenaran (Benar/Salah) tiap pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 2,
  },
  29: {
    elemen: 'Pola Gambar & Pola Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat menganalisis aturan dan suku lanjutan dari pola gambar membesar.',
    indikatorSoal: 'Disajikan gambar pola susunan persegi beserta 2 pernyataan aturan penambahan dan jumlah kotak pola ke-6, peserta didik dapat menilai Benar/Salah tiap pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 2,
  },
  30: {
    elemen: 'Pola Gambar & Pola Bilangan',
    tujuanPembelajaran: 'Peserta didik dapat mengevaluasi dua barisan pola bilangan menaik dan menurun sekaligus.',
    indikatorSoal: 'Disajikan dua barisan pola bilangan (Barisan A menaik +7 dan Barisan B menurun -8) beserta 2 pernyataan suku ke-5, peserta didik dapat menentukan Benar/Salah tiap pernyataan.',
    levelKognitif: 'L3',
    bobotSkor: 2,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'PGK Kategori (Benar / Salah)';
    case 'isian':
      return 'Isian Singkat';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  if (q.type === 'isian') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : '-';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu memahami dan menerapkan konsep ${q.topic} pada mata pelajaran Matematika Kelas 4.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus mengenai ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : q.type === 'pg' ? 1 : 2);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (t.includes('pecahan') || t.includes('desimal') || t.includes('persepuluh') || t.includes('perseratus')) {
    return 'Pecahan & Desimal';
  }
  if (t.includes('pola')) {
    return 'Pola Gambar & Pola Bilangan';
  }
  return 'Bilangan Cacah sampai 10.000';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  const elemenCountMap: Record<string, number> = {};
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0, isian: 0 };

  let totalBobot = 0;

  blueprints.forEach((bp, idx) => {
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    totalBobot += bp.bobotSkor;
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const allTypeItems = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    {
      type: 'pgk_kategori',
      label: 'PGK Kategori (Benar / Salah)',
      count: typeCountMap.pgk_kategori,
      percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
    },
    {
      type: 'isian',
      label: 'Isian Singkat',
      count: typeCountMap.isian,
      percentage: total > 0 ? Math.round((typeCountMap.isian / total) * 100) : 0,
    },
  ];

  const typeDistribution = allTypeItems.filter((item) => item.count > 0);

  return {
    total,
    totalBobot,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
