const initialProducts = [
    {
        "id": 1,
        "name": "Sopa con wonton de langostino y fideos Hacendado ultracongelada",
        "image": "images/Sopa_con_wonton_de_langostino_y_fideos_Hacendado_ultracongelada.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 2,
        "name": "Sticks de patata Hacendado",
        "image": "images/Sticks_de_patata_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 3,
        "name": "Suavizante ropa Nutrive Bosque Verde concentrado",
        "image": "images/Suavizante_ropa_Nutrive_Bosque_Verde_concentrado.jpg",
        "category": "Limpieza",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 4,
        "name": "Surtido de mini turrones Hacendado",
        "image": "images/Surtido_de_mini_turrones_Hacendado.jpg",
        "category": "Dulces y postres",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 5,
        "name": "Surtido sushi Bento pequeño contiene 2 nigiris, 4 makis, 2 uramakis, salsa de soja y salsa wasabi",
        "image": "images/Surtido_sushi_Bento_pequeño_contiene_2_nigiris,_4_makis,_2_uramakis,_salsa_de_soja_y_salsa_wasabi.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 6,
        "name": "Tampones regular Deliplus 100% algodón",
        "image": "images/Tampones_regular_Deliplus_100%_algodón.jpg",
        "category": "Higiene",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 7,
        "name": "Tarta helada nata y chocolate Hacendado",
        "image": "images/Tarta_helada_nata_y_chocolate_Hacendado.jpg",
        "category": "Dulces y postres",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 8,
        "name": "Tinto de verano sabor limón La Casera",
        "image": "images/Tinto_de_verano_sabor_limón_La_Casera.jpg",
        "category": "Bebidas",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 9,
        "name": "Toallitas bebé frescas & perfumadas Deliplus",
        "image": "images/Toallitas_bebé_frescas_&_perfumadas_Deliplus.jpg",
        "category": "Higiene",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 10,
        "name": "Toallitas íntimas cuidado diario Deliplus monodosis",
        "image": "images/Toallitas_íntimas_cuidado_diario_Deliplus_monodosis.jpg",
        "category": "Limpieza",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 11,
        "name": "Tónica original Schweppes",
        "image": "images/Tónica_original_Schweppes.jpg",
        "category": "Bebidas",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 12,
        "name": "Tónica pink zero Schweppes",
        "image": "images/Tónica_pink_zero_Schweppes.jpg",
        "category": "Bebidas",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 13,
        "name": "Tubitos bañados chocolate negro Hacendado ideal para postres y helados",
        "image": "images/Tubitos_bañados_chocolate_negro_Hacendado_ideal_para_postres_y_helados.jpg",
        "category": "Dulces y postres",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 14,
        "name": "Turrón Crema Catalana'",
        "image": "images/Turrón_Crema_Catalana'.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 15,
        "name": "Turrón de yema tostada Hacendado",
        "image": "images/Turrón_de_yema_tostada_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 16,
        "name": "Turrón Crema Catalana",
        "image": "images/Turrón_Crema_Catalana.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 17,
        "name": "Vaso de golosinas Halloween",
        "image": "images/Vaso_de_golosinas_Halloween.jpg",
        "category": "Dulces y postres",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 18,
        "name": "Vermouth blanco Maronti",
        "image": "images/Vermouth_blanco_Maronti.jpg",
        "category": "Bebidas",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 19,
        "name": "Vermouth rojo Maronti",
        "image": "images/Vermouth_rojo_Maronti.jpg",
        "category": "Bebidas",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 20,
        "name": "Vino tinto Casón Histórico",
        "image": "images/Vino_tinto_Casón_Histórico.jpg",
        "category": "Bebidas",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 21,
        "name": "Vino-dulce-Blue-moscato-VCristina-espumoso",
        "image": "images/Vino-dulce-Blue-moscato-VCristina-espumoso.jpg",
        "category": "Bebidas",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 22,
        "name": "12 Mini croissants de mantequilla",
        "image": "images/12_Mini_croissants_de_mantequilla.jpg",
        "category": "Panadería y pastelería",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 23,
        "name": "12 Mini saladas",
        "image": "images/12_Mini_saladas.jpg",
        "category": "Panadería y pastelería",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 24,
        "name": "Abrillantador lavavajillas líquido Bosque Verde",
        "image": "images/Abrillantador_lavavajillas_líquido_Bosque_Verde.jpg",
        "category": "Limpieza",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 25,
        "name": "Aceite de girasol refinado 0,2º Hacendado",
        "image": "images/Aceite_de_girasol_refinado_0,2º_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 26,
        "name": "Aceite de oliva virgen extra Hacendado Spray",
        "image": "images/Aceite_de_oliva_virgen_extra_Hacendado_Spray.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 27,
        "name": "Aceite de oliva virgen extra Hacendado",
        "image": "images/Aceite_de_oliva_virgen_extra_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 28,
        "name": "Agua destilada Bosque Verde",
        "image": "images/Agua_destilada_Bosque_Verde.jpg",
        "category": "Limpieza",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 29,
        "name": "Agua Micelar cara y ojos Facial Clean Deliplus todo tipo de piel",
        "image": "images/Agua_Micelar_cara_y_ojos_Facial_Clean_Deliplus_todo_tipo_de_piel.jpg",
        "category": "Higiene",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 30,
        "name": "Agua mineral grande Bezoya mineralización muy débil",
        "image": "images/Agua_mineral_grande_Bezoya_mineralización_muy_débil.jpg",
        "category": "Agua y refrescos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 31,
        "name": "Agua mineral pequeña Font Agudes tapón infantil mineralización débil",
        "image": "images/Agua_mineral_pequeña_Font_Agudes_tapón_infantil_mineralización_débil.jpg",
        "category": "Agua y refrescos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 32,
        "name": "Albóndigas en salsa Hacendado",
        "image": "images/Albóndigas_en_salsa_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 33,
        "name": "Allioli Hacendado",
        "image": "images/Allioli_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 34,
        "name": "Ambientador eléctrico Spa Bosque Verde 6 fragancias recambio",
        "image": "images/Ambientador_eléctrico_Spa_Bosque_Verde_6_fragancias_recambio.jpg",
        "category": "Higiene",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 35,
        "name": "Aperitivo de patata sabor original Pringles",
        "image": "images/Aperitivo_de_patata_sabor_original_Pringles.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 36,
        "name": "Arándanos",
        "image": "images/Arándanos.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 37,
        "name": "Banana",
        "image": "images/Banana.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 38,
        "name": "Barquillos rellenos de crema turrón Hacendado",
        "image": "images/Barquillos_rellenos_de_crema_turrón_Hacendado.jpg",
        "category": "Dulces y postres",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 39,
        "name": "Barra de helado sabor vainilla, chocolate y nata Hacendado",
        "image": "images/Barra_de_helado_sabor_vainilla,_chocolate_y_nata_Hacendado.jpg",
        "category": "Dulces y postres",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 40,
        "name": "Barra de pan rústica",
        "image": "images/Barra_de_pan_rústica.jpg",
        "category": "Panadería y pastelería",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 41,
        "name": "Barritas de chocolate con leche Hacendado rellenas de leche",
        "image": "images/Barritas_de_chocolate_con_leche_Hacendado_rellenas_de_leche.jpg",
        "category": "Dulces y postres",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 42,
        "name": "Barritas de galleta bañadas en chocolate con leche Chips Ahoy",
        "image": "images/Barritas_de_galleta_bañadas_en_chocolate_con_leche_Chips_Ahoy.jpg",
        "category": "Dulces y postres",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 43,
        "name": "Bastoncillos de algodón 100% Deliplus",
        "image": "images/Bastoncillos_de_algodón_100%_Deliplus.jpg",
        "category": "Higiene",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 44,
        "name": "Batido de chocolate ColaCao Energy",
        "image": "images/Batido_de_chocolate_ColaCao_Energy.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 45,
        "name": "Bayeta suave multiusos Bosque Verde",
        "image": "images/Bayeta_suave_multiusos_Bosque_Verde.jpg",
        "category": "Limpieza",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 46,
        "name": "Bebida de avena Alitey",
        "image": "images/Bebida_de_avena_Alitey.jpg",
        "category": "Bebidas",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 47,
        "name": "Bebida de soja sabor vainilla Hacendado 0% azúcar",
        "image": "images/Bebida_de_soja_sabor_vainilla_Hacendado_0%_azúcar.jpg",
        "category": "Bebidas",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 48,
        "name": "Bebida energética Mango Loco Monster",
        "image": "images/Bebida_energética_Mango_Loco_Monster.jpg",
        "category": "Bebidas",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 49,
        "name": "Bebida Kéfir de coco Hacendado",
        "image": "images/Bebida_Kéfir_de_coco_Hacendado.jpg",
        "category": "Bebidas",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 50,
        "name": "Bebida láctea natural Actimel Danone",
        "image": "images/Bebida_láctea_natural_Actimel_Danone.jpg",
        "category": "Bebidas",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 51,
        "name": "Bolsa de basura grande Bosque Verde 50L cubo grande",
        "image": "images/Bolsa_de_basura_grande_Bosque_Verde_50L_cubo_grande.jpg",
        "category": "Limpieza",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 52,
        "name": "Bolsa de basura mini Bosque Verde 5L cubo pequeño",
        "image": "images/Bolsa_de_basura_mini_Bosque_Verde_5L_cubo_pequeño.jpg",
        "category": "Limpieza",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 53,
        "name": "Brochetas de pollo rellenas",
        "image": "images/Brochetas_de_pollo_rellenas.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 54,
        "name": "Brochetas de pollo, pimiento verde y tocino de cerdo con varilla",
        "image": "images/Brochetas_de_pollo,_pimiento_verde_y_tocino_de_cerdo_con_varilla.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 55,
        "name": "Café en cápsula extra fuerte Hacendado compatibles máquinas Nespresso",
        "image": "images/Café_en_cápsula_extra_fuerte_Hacendado_compatibles_máquinas_Nespresso.jpg",
        "category": "Bebidas",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 56,
        "name": "Café molido natural Hacendado",
        "image": "images/Café_molido_natural_Hacendado.jpg",
        "category": "Bebidas",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 57,
        "name": "Canela molida Hacendado",
        "image": "images/Canela_molida_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 58,
        "name": "Castañas cocidas y peladas Hacendado",
        "image": "images/Castañas_cocidas_y_peladas_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 59,
        "name": "Cepillo dental Medio Deliplus",
        "image": "images/Cepillo_dental_Medio_Deliplus.jpg",
        "category": "Higiene",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 60,
        "name": "Cerveza 0,0% sin alcohol Falke",
        "image": "images/Cerveza_0,0%_sin_alcohol_Falke.jpg",
        "category": "Bebidas",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 61,
        "name": "Cerveza con sabor a tequila Desperados",
        "image": "images/Cerveza_con_sabor_a_tequila_Desperados.jpg",
        "category": "Bebidas",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 62,
        "name": "Cerveza especial Estrella Galicia",
        "image": "images/Cerveza_especial_Estrella_Galicia.jpg",
        "category": "Bebidas",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 63,
        "name": "Cerveza Radler con zumo natural de limón Steinburg",
        "image": "images/Cerveza_Radler_con_zumo_natural_de_limón_Steinburg.jpg",
        "category": "Bebidas",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 64,
        "name": "Cerveza sin gluten Free Damm 0,0% sin alcohol",
        "image": "images/Cerveza_sin_gluten_Free_Damm_0,0%_sin_alcohol.jpg",
        "category": "Bebidas",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 65,
        "name": "Cerveza suave Xibeca Damm",
        "image": "images/Cerveza_suave_Xibeca_Damm.jpg",
        "category": "Bebidas",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 66,
        "name": "Cerveza especial Estrella Galicia",
        "image": "images/Cerveza_especial_Estrella_Galicia.jpg",
        "category": "Bebidas",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 67,
        "name": "Champú y acondicionador anticaspa Classic 2 en 1 H&S",
        "image": "images/Champú_y_acondicionador_anticaspa_Classic_2_en_1_H&S.jpg",
        "category": "Higiene",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 68,
        "name": "Cif blanqueador",
        "image": "images/Cif_blanqueador.jpg",
        "category": "Limpieza",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 69,
        "name": "Colgador WC Azul limpieza activa Bosque Verde triple acción",
        "image": "images/Colgador_WC_Azul_limpieza_activa_Bosque_Verde_triple_acción.jpg",
        "category": "Limpieza",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 70,
        "name": "Conos sabor bacon y queso Hacendado",
        "image": "images/Conos_sabor_bacon_y_queso_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 71,
        "name": "Coulant de chocolate Hacendado",
        "image": "images/Coulant_de_chocolate_Hacendado.jpg",
        "category": "Dulces y postres",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 72,
        "name": "Crema al cacao con avellanas Nocilla original",
        "image": "images/Crema_al_cacao_con_avellanas_Nocilla_original.jpg",
        "category": "Dulces y postres",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 73,
        "name": "Crema al cacao con avellanas Nutella",
        "image": "images/Crema_al_cacao_con_avellanas_Nutella.jpg",
        "category": "Dulces y postres",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 74,
        "name": "Crema de manos, cara y cuerpo Nivea Soft hidratante intensiva",
        "image": "images/Crema_de_manos,_cara_y_cuerpo_Nivea_Soft_hidratante_intensiva.jpg",
        "category": "Higiene",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 75,
        "name": "Crepes rellenos de chocolate Hacendado",
        "image": "images/Crepes_rellenos_de_chocolate_Hacendado.jpg",
        "category": "Dulces y postres",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 76,
        "name": "Croquetas de pollo",
        "image": "images/Croquetas_de_pollo.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 77,
        "name": "Cubos de hielo",
        "image": "images/Cubos_de_hielo.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 78,
        "name": "Delicias de pollo Hacendado ultracongeladas con empanado a base de maíz",
        "image": "images/Delicias_de_pollo_Hacendado_ultracongeladas_con_empanado_a_base_de_maíz.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 79,
        "name": "Dentífrico gel Clorofila Fresh 2 en 1 Deliplus",
        "image": "images/Dentífrico_gel_Clorofila_Fresh_2_en_1_Deliplus.jpg",
        "category": "Higiene",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 80,
        "name": "Desodorante Dark Temptation Axe",
        "image": "images/Desodorante_Dark_Temptation_Axe.jpg",
        "category": "Higiene",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 81,
        "name": "Detergente ropa jabón natural de Marsella Bosque Verde líquido",
        "image": "images/Detergente_ropa_jabón_natural_de_Marsella_Bosque_Verde_líquido.jpg",
        "category": "Limpieza",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 82,
        "name": "Discos desmaquillantes Deliplus ovalados algodón 100%",
        "image": "images/Discos_desmaquillantes_Deliplus_ovalados_algodón_100%.jpg",
        "category": "Higiene",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 83,
        "name": "Ensaladilla de cangrejo Hacendado",
        "image": "images/Ensaladilla_de_cangrejo_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 84,
        "name": "Esponja de baño exfoliación intensa Deliplus",
        "image": "images/Esponja_de_baño_exfoliación_intensa_Deliplus.jpg",
        "category": "Higiene",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 85,
        "name": "Esponja de baño suave Deliplus",
        "image": "images/Esponja_de_baño_suave_Deliplus.jpg",
        "category": "Higiene",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 86,
        "name": "Estropajo baño Bosque Verde fibra blanca",
        "image": "images/Estropajo_baño_Bosque_Verde_fibra_blanca.jpg",
        "category": "Limpieza",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 87,
        "name": "Film Transparente Bosque Verde con sierra deslizante",
        "image": "images/Film_Transparente_Bosque_Verde_con_sierra_deslizante.jpg",
        "category": "Hogar",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 88,
        "name": "Fregona Microfibra Absorbente Bosque Verde suelos de interior",
        "image": "images/Fregona_Microfibra_Absorbente_Bosque_Verde_suelos_de_interior.jpg",
        "category": "Limpieza",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 89,
        "name": "Friegasuelos Pino Bosque Verde líquido",
        "image": "images/Friegasuelos_Pino_Bosque_Verde_líquido.jpg",
        "category": "Limpieza",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 90,
        "name": "Galletas Caocream chocolate blanco Hacendado rellenas de crema",
        "image": "images/Galletas_Caocream_chocolate_blanco_Hacendado_rellenas_de_crema.jpg",
        "category": "Dulces y postres",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 91,
        "name": "Galletas caramelizadas Lotus Biscoff",
        "image": "images/Galletas_caramelizadas_Lotus_Biscoff.jpg",
        "category": "Dulces y postres",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 92,
        "name": "Galletas Cookies Hacendado 40% pepitas de chocolate",
        "image": "images/Galletas_Cookies_Hacendado_40%_pepitas_de_chocolate.jpg",
        "category": "Dulces y postres",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 93,
        "name": "Galletas mini cookies Hacendado",
        "image": "images/Galletas_mini_cookies_Hacendado.jpg",
        "category": "Dulces y postres",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 94,
        "name": "Garbanzo cocido Hacendado",
        "image": "images/Garbanzo_cocido_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 95,
        "name": "Gazpacho tradicional Hacendado",
        "image": "images/Gazpacho_tradicional_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 96,
        "name": "Gel de afeitar piel sensible Gillette con aloe vera",
        "image": "images/Gel_de_afeitar_piel_sensible_Gillette_con_aloe_vera.jpg",
        "category": "Higiene",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 97,
        "name": "Gel de baño Dove 0% sulfato",
        "image": "images/Gel_de_baño_Dove_0%_sulfato.jpg",
        "category": "Higiene",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 98,
        "name": "Granizado de limón Hacendado",
        "image": "images/Granizado_de_limón_Hacendado.jpg",
        "category": "Golosinas y postres",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 99,
        "name": "Guacamole Hacendado 95% aguacate fresco",
        "image": "images/Guacamole_Hacendado_95%_aguacate_fresco.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 100,
        "name": "Guantes de nitrilo grandes",
        "image": "images/Guantes_de_nitrilo_grandes.jpg",
        "category": "Higiene",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 101,
        "name": "Guantes Grandes",
        "image": "images/Guantes_Grandes.jpg",
        "category": "Higiene",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 102,
        "name": "Guantes medianos",
        "image": "images/Guantes_medianos.jpg",
        "category": "Higiene",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 103,
        "name": "Helado almendrado Hacendado",
        "image": "images/Helado_almendrado_Hacendado.jpg",
        "category": "Golosinas y postres",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 104,
        "name": "Helado cucurucho choco nata Hacendado",
        "image": "images/Helado_cucurucho_choco_nata_Hacendado.jpg",
        "category": "Golosinas y postres",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 105,
        "name": "Helado cucurucho de vainilla Hacendado",
        "image": "images/Helado_cucurucho_de_vainilla_Hacendado.jpg",
        "category": "Golosinas y postres",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 106,
        "name": "Helado mini bombón almendrado Hacendado",
        "image": "images/Helado_mini_bombón_almendrado_Hacendado.jpg",
        "category": "Golosinas y postres",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 107,
        "name": "Helado mini cucurucho nata Hacendado",
        "image": "images/Helado_mini_cucurucho_nata_Hacendado.jpg",
        "category": "Golosinas y postres",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 108,
        "name": "Helado mini sándwich vainilla y cookie Hacendado",
        "image": "images/Helado_mini_sándwich_vainilla_y_cookie_Hacendado.jpg",
        "category": "Golosinas y postres",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 109,
        "name": "Helado mini surtido Hacendado",
        "image": "images/Helado_mini_surtido_Hacendado.jpg",
        "category": "Golosinas y postres",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 110,
        "name": "Helado Mochi coco Hacendado",
        "image": "images/Helado_Mochi_coco_Hacendado.jpg",
        "category": "Golosinas y postres",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 111,
        "name": "Helado Mochi mango Hacendado",
        "image": "images/Helado_Mochi_mango_Hacendado.jpg",
        "category": "Golosinas y postres",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 112,
        "name": "Helado sándwich super nata Hacendado",
        "image": "images/Helado_sándwich_super_nata_Hacendado.jpg",
        "category": "Congelados",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 113,
        "name": "Helado vegetal mini a base de anacardo con crema de pistacho Hacendado",
        "image": "images/Helado_vegetal_mini_a_base_de_anacardo_con_crema_de_pistacho_Hacendado.jpg",
        "category": "Golosinas y postres",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 114,
        "name": "Huevos grandes L",
        "image": "images/Huevos_grandes_L.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 115,
        "name": "Hummus de garbanzos Hacendado receta clásica",
        "image": "images/Hummus_de_garbanzos_Hacendado_receta_clásica.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 116,
        "name": "Insecticida moscas y mosquitos Bosque Verde sin perfume",
        "image": "images/Insecticida_moscas_y_mosquitos_Bosque_Verde_sin_perfume.jpg",
        "category": "Otros",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 117,
        "name": "Ketchup Hacendado",
        "image": "images/Ketchup_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 118,
        "name": "Lambrusco dell'Emilia rosado espumoso Piccolo Giovanni",
        "image": "images/Lambrusco_dell'Emilia_rosado_espumoso_Piccolo_Giovanni.jpg",
        "category": "Bebidas",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 119,
        "name": "Langostino cocido y pelado Hacendado ultracongelado",
        "image": "images/Langostino_cocido_y_pelado_Hacendado_ultracongelado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 120,
        "name": "Lasaña boloñesa Hacendado",
        "image": "images/Lasaña_boloñesa_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 121,
        "name": "Lavavajillas Todo en 1 Bosque Verde en pastillas lavado a máquina",
        "image": "images/Lavavajillas_Todo_en_1_Bosque_Verde_en_pastillas_lavado_a_máquina.jpg",
        "category": "Limpieza",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 122,
        "name": "Lavavajillas Ultra Original Fairy líquido lavado a mano",
        "image": "images/Lavavajillas_Ultra_Original_Fairy_líquido_lavado_a_mano.jpg",
        "category": "Limpieza",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 123,
        "name": "Leche semidesnatada Hacendado",
        "image": "images/Leche_semidesnatada_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 124,
        "name": "Leche semidesnatada sin lactosa Hacendado",
        "image": "images/Leche_semidesnatada_sin_lactosa_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 125,
        "name": "Lenteja cocida Hacendado",
        "image": "images/Lenteja_cocida_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 126,
        "name": "Licor crema Puente Pazos",
        "image": "images/Licor_crema_Puente_Pazos.jpg",
        "category": "Bebidas",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 127,
        "name": "Licor de crema de turron",
        "image": "images/Licor_de_crema_de_turron.jpg",
        "category": "Bebidas",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 128,
        "name": "Limón exprimido Hacendado",
        "image": "images/Limón_exprimido_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 129,
        "name": "Limonada Don Simón light sin gas",
        "image": "images/Limonada_Don_Simón_light_sin_gas.jpg",
        "category": "Bebidas",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 130,
        "name": "Limonada Hacendado light sin gas",
        "image": "images/Limonada_Hacendado_light_sin_gas.jpg",
        "category": "Bebidas",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 131,
        "name": "Limpiacristales y multiusos Bosque Verde con pistola",
        "image": "images/Limpiacristales_y_multiusos_Bosque_Verde_con_pistola.jpg",
        "category": "Limpieza",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 132,
        "name": "Limpiador WC Spa Bosque Verde en gel",
        "image": "images/Limpiador_WC_Spa_Bosque_Verde_en_gel.jpg",
        "category": "Limpieza",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 133,
        "name": "Loción corporal reafirmante Q10 Nivea y vitamina C piel normal",
        "image": "images/Loción_corporal_reafirmante_Q10_Nivea_y_vitamina_C_piel_normal.jpg",
        "category": "Higiene",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 134,
        "name": "Macarrones con bolognesa hacendado",
        "image": "images/Macarrones_con_bolognesa_hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 135,
        "name": "Mantequilla con sal Hacendado",
        "image": "images/Mantequilla_con_sal_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 136,
        "name": "Mayonesa Hacendado",
        "image": "images/Mayonesa_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 137,
        "name": "Merluza empanada pan fino Hacendado ultracongelada",
        "image": "images/Merluza_empanada_pan_fino_Hacendado_ultracongelada.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 138,
        "name": "Mermelada de fresa Hacendado",
        "image": "images/Mermelada_de_fresa_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 139,
        "name": "Mini burgers de pollo",
        "image": "images/Mini_burgers_de_pollo.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 140,
        "name": "Mini chorizo ibérico extra La Hacienda del ibérico",
        "image": "images/Mini_chorizo_ibérico_extra_La_Hacienda_del_ibérico.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 141,
        "name": "Mini tostadas de trigo Minigrill extra finas",
        "image": "images/Mini_tostadas_de_trigo_Minigrill_extra_finas.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 142,
        "name": "Molde de Aluminio Rectangular 0,5L Alibérico con tapa",
        "image": "images/Molde_de_Aluminio_Rectangular_0,5L_Alibérico_con_tapa.jpg",
        "category": "Hogar",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 143,
        "name": "Mostaza clásica Hacendado",
        "image": "images/Mostaza_clásica_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 144,
        "name": "Multiusos Desinfectante antibacterias Bosque Verde sin lejía con pistola",
        "image": "images/Multiusos_Desinfectante_antibacterias_Bosque_Verde_sin_lejía_con_pistola.jpg",
        "category": "Limpieza",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 145,
        "name": "Naranjas",
        "image": "images/Naranjas.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 146,
        "name": "Neutrogena Spot Controlling Limpiador Facial (1 x 200 ml), gel limpiador facial con ácido salicílico para piel propensa al acné, jabón facial para los granos persistentes",
        "image": "images/Neutrogena_Spot_Controlling_Limpiador_Facial_(1_x_200_ml),_gel_limpiador_facial_con_ácido_salicílico_para_piel_propensa_al_acné,_jabón_facial_para_los_granos_persistentes.jpg",
        "category": "Higiene",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 147,
        "name": "Nuggets de pollo Hacendado ultracongelados",
        "image": "images/Nuggets_de_pollo_Hacendado_ultracongelados.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 148,
        "name": "Orégano Hacendado",
        "image": "images/Orégano_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 149,
        "name": "Palillos redondos Bosque Verde",
        "image": "images/Palillos_redondos_Bosque_Verde.jpg",
        "category": "Hogar",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 150,
        "name": "Palitos de surimi Hacendado",
        "image": "images/Palitos_de_surimi_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 151,
        "name": "Pan de molde blanco Hacendado",
        "image": "images/Pan_de_molde_blanco_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 152,
        "name": "Pan de molde blanco sin corteza Hacendado",
        "image": "images/Pan_de_molde_blanco_sin_corteza_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 153,
        "name": "Papel de Aluminio Bosque Verde",
        "image": "images/Papel_de_Aluminio_Bosque_Verde.jpg",
        "category": "Hogar",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 154,
        "name": "Papel higiénico Doble Rollo Bosque Verde",
        "image": "images/Papel_higiénico_Doble_Rollo_Bosque_Verde.jpg",
        "category": "Hogar",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 155,
        "name": "Papel higiénico húmedo WC Bosque Verde con aloe vera y camomila",
        "image": "images/Papel_higiénico_húmedo_WC_Bosque_Verde_con_aloe_vera_y_camomila.jpg",
        "category": "Higiene",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 156,
        "name": "Papel higiénico húmedo WC Bosque Verde",
        "image": "images/Papel_higiénico_húmedo_WC_Bosque_Verde.jpg",
        "category": "Higiene",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 157,
        "name": "Papel hogar Compacto Absorbente Bosque Verde",
        "image": "images/Papel_hogar_Compacto_Absorbente_Bosque_Verde.jpg",
        "category": "Hogar",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 158,
        "name": "Papel vegetal Bosque Verde 38 x 42 cm",
        "image": "images/Papel_vegetal_Bosque_Verde_38_x_42_cm.jpg",
        "category": "Hogar",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 159,
        "name": "Pasta fresca ravioli ricotta y espinacas Hacendado",
        "image": "images/Pasta_fresca_ravioli_ricotta_y_espinacas_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 160,
        "name": "Pasta fresca tortellini carne Hacendado",
        "image": "images/Pasta_fresca_tortellini_carne_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 161,
        "name": "Patatas fritas clásicas Hacendado",
        "image": "images/Patatas_fritas_clásicas_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 162,
        "name": "Pechuga de pollo braseada Hacendado finas lonchas",
        "image": "images/Pechuga_de_pollo_braseada_Hacendado_finas_lonchas.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 163,
        "name": "Pechugas enteras de pollo",
        "image": "images/Pechugas_enteras_de_pollo.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 164,
        "name": "Pincho tortilla de patata con cebolla Listo para Comer",
        "image": "images/Pincho_tortilla_de_patata_con_cebolla_Listo_para_Comer.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 165,
        "name": "Pizza 4 quesos Hacendado",
        "image": "images/Pizza_4_quesos_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 166,
        "name": "Pizza barbacoa Hacendado",
        "image": "images/Pizza_barbacoa_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 167,
        "name": "Pizza carbonara Hacendado",
        "image": "images/Pizza_carbonara_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 168,
        "name": "Pizza jamón y queso Hacendado",
        "image": "images/Pizza_jamón_y_queso_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 169,
        "name": "Pizza margarita Hacendado",
        "image": "images/Pizza_margarita_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 170,
        "name": "Pizza pollo y bacón Hacendado",
        "image": "images/Pizza_pollo_y_bacón_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 171,
        "name": "Pizza romana Hacendado con champiñones salteados",
        "image": "images/Pizza_romana_Hacendado_con_champiñones_salteados.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 172,
        "name": "Postre lácteo con arándanos +Proteínas Hacendado 0% m.g 10 g proteínas",
        "image": "images/Postre_lácteo_con_arándanos_+Proteínas_Hacendado_0%_m.g_10_g_proteínas.jpg",
        "category": "Dulces y postres",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 173,
        "name": "Postre lácteo con fresa +Proteínas Hacendado 0% m.g 10 g proteínas",
        "image": "images/Postre_lácteo_con_fresa_+Proteínas_Hacendado_0%_m.g_10_g_proteínas.jpg",
        "category": "Dulces y postres",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 174,
        "name": "Queso grana padano Hacendado en escamas",
        "image": "images/Queso_grana_padano_Hacendado_en_escamas.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 175,
        "name": "Queso lonchas emmental de vaca Hacendado",
        "image": "images/Queso_lonchas_emmental_de_vaca_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 176,
        "name": "Queso lonchas fundido suave mezcla Hacendado",
        "image": "images/Queso_lonchas_fundido_suave_mezcla_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 177,
        "name": "Queso precortado de cabra Hacendado",
        "image": "images/Queso_precortado_de_cabra_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 178,
        "name": "Queso untar original Philadelphia",
        "image": "images/Queso_untar_original_Philadelphia.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 179,
        "name": "Quitagrasas KH-7 con pistola",
        "image": "images/Quitagrasas_KH-7_con_pistola.jpg",
        "category": "Limpieza",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 180,
        "name": "Ravioli en lata",
        "image": "images/Ravioli_en_lata.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 181,
        "name": "Recambios maquinilla de afeitar Gillette Fusion Sport 5 hojas",
        "image": "images/Recambios_maquinilla_de_afeitar_Gillette_Fusion_Sport_5_hojas.jpg",
        "category": "Higiene",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 182,
        "name": "Refresco Coca-Cola light",
        "image": "images/Refresco_Coca-Cola_light.jpg",
        "category": "Agua y refrescos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 183,
        "name": "Refresco Coca-Cola Zero azúcar Lata",
        "image": "images/Refresco_Coca-Cola_Zero_azúcar_Lata.jpg",
        "category": "Agua y refrescos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 184,
        "name": "Refresco Coca-Cola Zero azúcar",
        "image": "images/Refresco_Coca-Cola_Zero_azúcar.jpg",
        "category": "Agua y refrescos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 185,
        "name": "Refresco Coca-Cola",
        "image": "images/Refresco_Coca-Cola.jpg",
        "category": "Agua y refrescos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 186,
        "name": "Refresco limón Schweppes original",
        "image": "images/Refresco_limón_Schweppes_original.jpg",
        "category": "Agua y refrescos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 187,
        "name": "Refresco té al limón Nestea",
        "image": "images/Refresco_té_al_limón_Nestea.jpg",
        "category": "Agua y refrescos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 188,
        "name": "Rosquillas al cacao",
        "image": "images/Rosquillas_al_cacao.jpg",
        "category": "Galletas y bollería",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 189,
        "name": "Rúcula",
        "image": "images/Rúcula.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 190,
        "name": "Sal fina de mesa Hacendado",
        "image": "images/Sal_fina_de_mesa_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 191,
        "name": "Sal lavavajillas Bosque Verde en grano",
        "image": "images/Sal_lavavajillas_Bosque_Verde_en_grano.jpg",
        "category": "Limpieza",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 192,
        "name": "Salchichas cocidas de cerdo estilo Bratwurst Hacendado",
        "image": "images/Salchichas_cocidas_de_cerdo_estilo_Bratwurst_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 193,
        "name": "Salchichas cocidas pikante Schara de cerdo ahumadas",
        "image": "images/Salchichas_cocidas_pikante_Schara_de_cerdo_ahumadas.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 194,
        "name": "Salsa Barbacoa Hacendado",
        "image": "images/Salsa_Barbacoa_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 195,
        "name": "Salsa Burger Hacendado",
        "image": "images/Salsa_Burger_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 196,
        "name": "Salsa César Hacendado",
        "image": "images/Salsa_César_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 197,
        "name": "Salsa de tomate Boloñesa Hacendado",
        "image": "images/Salsa_de_tomate_Boloñesa_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 198,
        "name": "Salsa fresca Carbonara Hacendado",
        "image": "images/Salsa_fresca_Carbonara_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 199,
        "name": "Salsa Gajo Rústica Hacendado",
        "image": "images/Salsa_Gajo_Rústica_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 200,
        "name": "Salsa Pesto con albahaca Hacendado",
        "image": "images/Salsa_Pesto_con_albahaca_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 201,
        "name": "Salsa Ranch Hacendado",
        "image": "images/Salsa_Ranch_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 202,
        "name": "Salsa Yogur Hacendado",
        "image": "images/Salsa_Yogur_Hacendado.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 203,
        "name": "Servilleta papel Bosque Verde 1 capa 30 x 30 cm",
        "image": "images/Servilleta_papel_Bosque_Verde_1_capa_30_x_30_cm.jpg",
        "category": "Hogar",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 204,
        "name": "Sirope de chocolate Hacendado",
        "image": "images/Sirope_de_chocolate_Hacendado.jpg",
        "category": "Dulces y postres",
        "quantity": 1.0,
        "unitType": "unidad/es"
    },
    {
        "id": 205,
        "name": "Snack de maíz Bits Doritos sabor barbacoa",
        "image": "images/Snack_de_maíz_Bits_Doritos_sabor_barbacoa.jpg",
        "category": "Alimentos",
        "quantity": 1.0,
        "unitType": "unidad/es"
    }
]

export default initialProducts;
