---
title: Szálláshely létrehozása | Appartman
sections:
  - type: HeroSection
    colors: colors-h
    title: 'Szálláshely létrehozása, árak és foglalási szabályok beállítása'
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: col
      title:
        textAlign: center
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: center
      text:
        textAlign: center
      actions:
        justifyContent: flex-start
  - elementId: ''
    colors: colors-a
    backgroundImage: null
    actions:
      - type: Button
        label: Vissza a Segítség oldalra
        showIcon: true
        icon: arrowLeft
        url: /sugo
        style: link
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-6
          - pb-4
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: col
      title:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: CtaSection
  - type: FeaturedItemsSection
    colors: colors-a
    subtitle: ''
    items:
      - type: FeaturedItem
        text: >
          ### 1. Új szálláshely hozzáadása


          Új szálláshelyet a regisztráció után, vagy a fejlécen a jobb oldalon
          található legördülő menüben lévő Szállások menüpontból lehet
          létrehozni.


          Itt a következő alapadatokat kell megadnod.


          *   Szálláshely neve


          *   Szálláshely email címe


          *   Szálláshely telefonszáma


          *   Irányítószám


          *   Város (automatikusan ajánl irányítószám alapján)


          *   Cím


          ### 2. Lakóegység adatok megadása


          A regisztrációs folyamatban a szálláshely létrehozása után, a
          szálláshely kártyájára kattintva automatikusan a Szobák menüpontba
          kerülsz, ahol a rendszer arra kér, hogy add meg a lakóegységeket. Ezt
          a jobb oldalon található Új lakóegység gombbal tudod megtenni. A
          következő paraméterek megadása szükséges.


          *   lakóegység neve


          *   férőhely


          #### Árazás és árszámítási típusok beállítása


          ##### Ársávok létszám alapján


          Ezzel az árazási típussal bizonyos vendégszámok között megadhatók
          külön árak. A bal oldalon található két legördülő menüvel tudod
          megadni az ársávokat vendégszám szerint. Az utolsó sáv felső határa a
          "Max főig" opcióval adható meg. A "Minden további vendég" opció esetén
          egy egységáron számítódik a megadott vendégszám felett.


          Példa a létszám alapján sávos árazásra egy 8 fős lakóegység esetén,
          hétvégi árakkal:


          ![](/images/Ke%CC%81pernyo%CC%8Bfoto%CC%81%202022-03-04%20-%2017.49.18.png)


          **Ársávok beállítása létszám alapján**


          1.  A lakóegység hozzáadása ablakban az "Árak" rész jobb oldalán
          található legördülő menüből válaszd ki a "Ársávok létszám alapján"
          opciót.


          2.  Add meg az árazási sávokhoz tartozó vendégszámokat


          3.  A "Max főig" opció az utolsó árazási sáv felső határát jelenti.
          Tehát ha egy 6 fős szobába szeretnél beállítani egy árazási sávot
          4-től 6 főig, akkor a bal oldali legördülőben válaszd ki a "4 főtől",
          a jobb oldaliban pedig a "Max főig" opciót.


          4.  Ha alkalmazol hétvégi árakat is, akkor jelöld be a hétvégi árak
          jelölőnégyzetet, és add meg az árakat a megjelenő szövegmezőkben.


          5.  Ha egy alapárat alkalmazol bizonyos vendégszámig, és azon felül
          minden vendég adott egységáron adódik az árhoz, akkor az alapárhoz
          tartozó sáv megadása után válaszd ki a "Minden további vendég" opciót.


          ##### Lakóegységenkénti árazás


          A foglalási összeget a lakóegység éjszakánkénti ára határozza meg.
          Beállítható hétvégi ár (péntek és szombat éjszaka).


          ##### Vendégéjszakánkénti árazás


          A foglalási összeget a vendégek éjszakánkénti ára határozza meg.
          Beállítható hétvégi ár (péntek és szombat éjszaka).


          ### 3. Lakóegység képeinek megadása


          A lakóegységek megadása és azok elmentése után a felületen minden
          lakóegységhez fog tartozni egy kártya a lakóegység adataival. Ezen
          található egy "Új képek feltöltése" gomb is, aminek használatával
          feltöltheted a lakóegységhez tartozó képeket. A képek feltöltése után
          a képeken található gombbal tudod beállítani, hogy melyik kép legyen
          az első a sorban. Ezek a képek a foglalási folyamatban a lakóegységek
          megjelenítésénél tűnnek fel.


          ### 4. Szálláshely képeinek megadása


          A szálláshely képei a foglalási folyamat kezdőképernyőjén jelennek
          meg. Ezeket a képeket a Beállítások menü "Szálláshely képei"
          szekciójában lehet megadni az "Új képek feltöltése" gombbal


          ### 5. Foglalási szabályok megadása


          Ha kész vagy minden lakóegységed megadásával, akkor megadhatók a
          foglalási szabályok is. Ez a következő helyen található:


          *Legördülő menü > Szabályok*


          Itt találsz egy kártyát az alapértelmezett árakkal (amiket megadtál a
          lakóegységeidhez). A kártyán jobb oldalt található opciók gombbal
          tudod szerkeszteni az alapértelmezett szabályokat. A megjelenő
          panelben a következő szabályokat van lehetőség beállítani:


          *   minimum foglalható éjszakák száma


          *   maximum foglalható éjszakák száma


          *   felkészülési idő


          *   érkezési napok


          ![](/images/Ke%CC%81pernyo%CC%8Bfoto%CC%81%202022-03-06%20-%2017.26.59.png)


          ### 6. Szezonális árak és foglalási szabályok megadása


          Az előzőekben az alapértelmezett árakat és foglalási szabályokat adtad
          meg. Az alapértelmezett árak és szabályok mindaddig érvényben vannak,
          amíg nem változtatod meg őket.


          Az Appartman foglalási rendszerében van lehetőség szezonokat és
          kiemelt időszakokat megadni, amiknek időtartamában egyedileg
          módosíthatók az árak és a szabályok.


          #### Szezon hozzáadása


          `A szezon hosszabb egybefüggő időszak (pl.: főszezon, utószezon), ami
          felülírja az alapértelmezett beállításokat a megadott dátumok között.`


          *Szálláshely > Legördülő menü > Szabályok > Új időszak > Szezon
          hozzáadása*


          ##### 1. Dátum és megnevezés megadása


          Első lépésben megadható az időszak neve. A szezon egy egybefüggő
          időszak, tehát ezek után egy kezdő és egy befejező dátumot kell
          megadni.


          ##### 2. Árak beállítása


          A következő fülre navigálva lakóegységenként állíthatod be az árakat.


          ##### 3. Foglalási szabályok beállítása


          A Foglalási szabályok fülre navigálva megadhatsz az összes
          lakóegységedre vonatkozó és a korábban megadott dátumok között
          érvényes szabályokat:


          *   minimum foglalható éjszakák


          *   minimum előfoglalási idő


          *   maximum foglalható éjszakák


          *   érkezési napok


          ##### 4. Mentés


          A mentés gombbal véglegesíted az új szezon megadását. Az árazás
          automatikusan életbe fog lépni a megadott dátumok elérkeztével.


          #### Kiemelt időszak hozzáadása


          `A kiemelt időszak ünnepek, hosszú hétvégék beállítására alkalmas.
          Lehet nem egybefüggő is (pl.: egyszerre megadható egy kiemelt ár
          augusztus 20 környékére és karácsonyra). A szezont és az
          alapértelmezett árakat is felülírja a megadott dátumokra.`


          Szálláshely > Legördülő menü > Szabályok > Új időszak > Kiemelt
          időszak hozzáadása


          ##### 1. Dátum megadása


          A kiemelt időszak lehet nem egybefüggő időszak, így a napok egyenként
          jelölendők be.


          ##### 2. Árak és elérhetőség beállítása


          A következő lépésben lakóegységenként állíthatod be az árakat. A
          következő elemek megadására van lehetőség


          *   árszámítás módja


          *   egységárak


          *   hétvégi árak


          ##### 3. Foglalási szabályok beállítása


          A foglalási szabályok fülre navigálva megadhatsz az összes
          lakóegységedre vonatkozó és a korábban megadott dátumok között
          érvényes szabályokat:


          *   minimum foglalható éjszakák


          *   minimum előfoglalási idő


          *   maximum foglalható éjszakák


          ##### 4. Mentés


          A mentés gombbal véglegesíted az új kiemelt időszak megadását. Az
          árazás automatikusan életbe fog lépni a megadott dátumok elérkeztével.
        featuredImage: null
        styles:
          title:
            textAlign: left
          subtitle:
            textAlign: left
          text:
            textAlign: left
    columns: 1
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: center
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: center
  - elementId: ''
    colors: colors-i
    backgroundImage: null
    text: |
      ### További segítségre van szükséged?

      Keress minket a Kapcsolat oldalon található ügyfélszolgálatos email címen!
    actions:
      - type: Button
        label: Kapcsolat
        showIcon: true
        icon: arrowRight
        url: /
        style: link
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-12
          - pb-12
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: col
      title:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: CtaSection
layout: PageLayout
---
