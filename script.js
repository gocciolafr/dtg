function genera() {
    const dataora = document.getElementById('dataOraInput');

    if (!dataora.value) {
        erroreModal.showModal();
    } else {
        const dataSelezionata = new Date(dataora.value);
        const nsett = Math.floor(dataSelezionata.getDay());
        const str = Math.floor(dataSelezionata.getTime() / 1000);
        
        document.getElementById('oc').textContent = `${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
        
        document.getElementById('ol').textContent = `${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}:${dataSelezionata.getSeconds()}`;
        
        document.getElementById('dc').textContent = `${dataSelezionata.getDate()}/${Math.floor(dataSelezionata.getMonth()+1)}/${dataSelezionata.getFullYear()}`;

        if (Math.floor(dataSelezionata.getMonth()+1)==1) {
            document.getElementById('dl').textContent = `${dataSelezionata.getDate()} gennaio ${dataSelezionata.getFullYear()}`;
        }
        if (Math.floor(dataSelezionata.getMonth()+1)==2) {
            document.getElementById('dl').textContent = `${dataSelezionata.getDate()} febbraio ${dataSelezionata.getFullYear()}`;
        }
        if (Math.floor(dataSelezionata.getMonth()+1)==3) {
            document.getElementById('dl').textContent = `${dataSelezionata.getDate()} marzo ${dataSelezionata.getFullYear()}`;
        }
        if (Math.floor(dataSelezionata.getMonth()+1)==4) {
            document.getElementById('dl').textContent = `${dataSelezionata.getDate()} aprile ${dataSelezionata.getFullYear()}`;
        }
        if (Math.floor(dataSelezionata.getMonth()+1)==5) {
            document.getElementById('dl').textContent = `${dataSelezionata.getDate()} maggio ${dataSelezionata.getFullYear()}`;
        }
        if (Math.floor(dataSelezionata.getMonth()+1)==6) {
            document.getElementById('dl').textContent = `${dataSelezionata.getDate()} giugno ${dataSelezionata.getFullYear()}`;
        }
        if (Math.floor(dataSelezionata.getMonth()+1)==7) {
            document.getElementById('dl').textContent = `${dataSelezionata.getDate()} luglio ${dataSelezionata.getFullYear()}`;
        }
        if (Math.floor(dataSelezionata.getMonth()+1)==8) {
            document.getElementById('dl').textContent = `${dataSelezionata.getDate()} agosto ${dataSelezionata.getFullYear()}`;
        }
        if (Math.floor(dataSelezionata.getMonth()+1)==9) {
            document.getElementById('dl').textContent = `${dataSelezionata.getDate()} settembre ${dataSelezionata.getFullYear()}`;
        }
        if (Math.floor(dataSelezionata.getMonth()+1)==10) {
            document.getElementById('dl').textContent = `${dataSelezionata.getDate()} ottobre ${dataSelezionata.getFullYear()}`;
        }
        if (Math.floor(dataSelezionata.getMonth()+1)==11) {
            document.getElementById('dl').textContent = `${dataSelezionata.getDate()} novembre ${dataSelezionata.getFullYear()}`;
        }
        if (Math.floor(dataSelezionata.getMonth()+1)==12) {
            document.getElementById('dl').textContent = `${dataSelezionata.getDate()} dicembre ${dataSelezionata.getFullYear()}`;
        }

        if (Math.floor(dataSelezionata.getMonth()+1)==1) {
            document.getElementById('dloc').textContent = `${dataSelezionata.getDate()} gennaio ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
        }
        if (Math.floor(dataSelezionata.getMonth()+1)==2) {
            document.getElementById('dloc').textContent = `${dataSelezionata.getDate()} febbraio ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
        }
        if (Math.floor(dataSelezionata.getMonth()+1)==3) {
            document.getElementById('dloc').textContent = `${dataSelezionata.getDate()} marzo ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
        }
        if (Math.floor(dataSelezionata.getMonth()+1)==4) {
            document.getElementById('dloc').textContent = `${dataSelezionata.getDate()} aprile ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
        }
        if (Math.floor(dataSelezionata.getMonth()+1)==5) {
            document.getElementById('dloc').textContent = `${dataSelezionata.getDate()} maggio ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
        }
        if (Math.floor(dataSelezionata.getMonth()+1)==6) {
            document.getElementById('dloc').textContent = `${dataSelezionata.getDate()} giugno ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
        }
        if (Math.floor(dataSelezionata.getMonth()+1)==7) {
            document.getElementById('dloc').textContent = `${dataSelezionata.getDate()} luglio ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
        }
        if (Math.floor(dataSelezionata.getMonth()+1)==8) {
            document.getElementById('dloc').textContent = `${dataSelezionata.getDate()} agosto ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
        }
        if (Math.floor(dataSelezionata.getMonth()+1)==9) {
            document.getElementById('dloc').textContent = `${dataSelezionata.getDate()} settembre ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
        }
        if (Math.floor(dataSelezionata.getMonth()+1)==10) {
            document.getElementById('dloc').textContent = `${dataSelezionata.getDate()} ottobre ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
        }
        if (Math.floor(dataSelezionata.getMonth()+1)==11) {
            document.getElementById('dloc').textContent = `${dataSelezionata.getDate()} novembre ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
        }
        if (Math.floor(dataSelezionata.getMonth()+1)==12) {
            document.getElementById('dloc').textContent = `${dataSelezionata.getDate()} dicembre ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
        }

        if (Math.floor(dataSelezionata.getMonth()+1)==1) {
            if (Math.floor(dataSelezionata.getDay()+1)==1) {
                document.getElementById('dlgsoc').textContent = `domenica ${dataSelezionata.getDate()} gennaio ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==2) {
                document.getElementById('dlgsoc').textContent = `lunedì ${dataSelezionata.getDate()} gennaio ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==3) {
                document.getElementById('dlgsoc').textContent = `martedì ${dataSelezionata.getDate()} gennaio ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==4) {
                document.getElementById('dlgsoc').textContent = `mercoledì ${dataSelezionata.getDate()} gennaio ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==5) {
                document.getElementById('dlgsoc').textContent = `giovedì ${dataSelezionata.getDate()} gennaio ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==6) {
                document.getElementById('dlgsoc').textContent = `venerdì ${dataSelezionata.getDate()} gennaio ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==7) {
                document.getElementById('dlgsoc').textContent = `sabato ${dataSelezionata.getDate()} gennaio ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
        }
        if (Math.floor(dataSelezionata.getMonth()+1)==2) {
            if (Math.floor(dataSelezionata.getDay()+1)==1) {
                document.getElementById('dlgsoc').textContent = `domenica ${dataSelezionata.getDate()} febbraio ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==2) {
                document.getElementById('dlgsoc').textContent = `lunedì ${dataSelezionata.getDate()} febbraio ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==3) {
                document.getElementById('dlgsoc').textContent = `martedì ${dataSelezionata.getDate()} febbraio ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==4) {
                document.getElementById('dlgsoc').textContent = `mercoledì ${dataSelezionata.getDate()} febbraio ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==5) {
                document.getElementById('dlgsoc').textContent = `giovedì ${dataSelezionata.getDate()} febbraio ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==6) {
                document.getElementById('dlgsoc').textContent = `venerdì ${dataSelezionata.getDate()} febbraio ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==7) {
                document.getElementById('dlgsoc').textContent = `sabato ${dataSelezionata.getDate()} febbraio ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }        }
        if (Math.floor(dataSelezionata.getMonth()+1)==3) {
            if (Math.floor(dataSelezionata.getDay()+1)==1) {
                document.getElementById('dlgsoc').textContent = `domenica ${dataSelezionata.getDate()} marzo ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==2) {
                document.getElementById('dlgsoc').textContent = `lunedì ${dataSelezionata.getDate()} marzo ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==3) {
                document.getElementById('dlgsoc').textContent = `martedì ${dataSelezionata.getDate()} marzo ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==4) {
                document.getElementById('dlgsoc').textContent = `mercoledì ${dataSelezionata.getDate()} marzo ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==5) {
                document.getElementById('dlgsoc').textContent = `giovedì ${dataSelezionata.getDate()} marzo ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==6) {
                document.getElementById('dlgsoc').textContent = `venerdì ${dataSelezionata.getDate()} marzo ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==7) {
                document.getElementById('dlgsoc').textContent = `sabato ${dataSelezionata.getDate()} marzo ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }        }
        if (Math.floor(dataSelezionata.getMonth()+1)==4) {
            if (Math.floor(dataSelezionata.getDay()+1)==1) {
                document.getElementById('dlgsoc').textContent = `domenica ${dataSelezionata.getDate()} aprile ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==2) {
                document.getElementById('dlgsoc').textContent = `lunedì ${dataSelezionata.getDate()} aprile ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==3) {
                document.getElementById('dlgsoc').textContent = `martedì ${dataSelezionata.getDate()} aprile ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==4) {
                document.getElementById('dlgsoc').textContent = `mercoledì ${dataSelezionata.getDate()} aprile ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==5) {
                document.getElementById('dlgsoc').textContent = `giovedì ${dataSelezionata.getDate()} aprile ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==6) {
                document.getElementById('dlgsoc').textContent = `venerdì ${dataSelezionata.getDate()} aprile ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==7) {
                document.getElementById('dlgsoc').textContent = `sabato ${dataSelezionata.getDate()} aprile ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }        }
        if (Math.floor(dataSelezionata.getMonth()+1)==5) {
            if (Math.floor(dataSelezionata.getDay()+1)==1) {
                document.getElementById('dlgsoc').textContent = `domenica ${dataSelezionata.getDate()} maggio ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==2) {
                document.getElementById('dlgsoc').textContent = `lunedì ${dataSelezionata.getDate()} maggio ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==3) {
                document.getElementById('dlgsoc').textContent = `martedì ${dataSelezionata.getDate()} maggio ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==4) {
                document.getElementById('dlgsoc').textContent = `mercoledì ${dataSelezionata.getDate()} maggio ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==5) {
                document.getElementById('dlgsoc').textContent = `giovedì ${dataSelezionata.getDate()} maggio ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==6) {
                document.getElementById('dlgsoc').textContent = `venerdì ${dataSelezionata.getDate()} maggio ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==7) {
                document.getElementById('dlgsoc').textContent = `sabato ${dataSelezionata.getDate()} maggio ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }        }
        if (Math.floor(dataSelezionata.getMonth()+1)==6) {
            if (Math.floor(dataSelezionata.getDay()+1)==1) {
                document.getElementById('dlgsoc').textContent = `domenica ${dataSelezionata.getDate()} giugno ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==2) {
                document.getElementById('dlgsoc').textContent = `lunedì ${dataSelezionata.getDate()} giugno ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==3) {
                document.getElementById('dlgsoc').textContent = `martedì ${dataSelezionata.getDate()} giugno ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==4) {
                document.getElementById('dlgsoc').textContent = `mercoledì ${dataSelezionata.getDate()} giugno ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==5) {
                document.getElementById('dlgsoc').textContent = `giovedì ${dataSelezionata.getDate()} giugno ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==6) {
                document.getElementById('dlgsoc').textContent = `venerdì ${dataSelezionata.getDate()} giugno ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==7) {
                document.getElementById('dlgsoc').textContent = `sabato ${dataSelezionata.getDate()} giugno ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }        }
        if (Math.floor(dataSelezionata.getMonth()+1)==7) {
            if (Math.floor(dataSelezionata.getDay()+1)==1) {
                document.getElementById('dlgsoc').textContent = `domenica ${dataSelezionata.getDate()} luglio ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==2) {
                document.getElementById('dlgsoc').textContent = `lunedì ${dataSelezionata.getDate()} luglio ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==3) {
                document.getElementById('dlgsoc').textContent = `martedì ${dataSelezionata.getDate()} luglio ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==4) {
                document.getElementById('dlgsoc').textContent = `mercoledì ${dataSelezionata.getDate()} luglio ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==5) {
                document.getElementById('dlgsoc').textContent = `giovedì ${dataSelezionata.getDate()} lulgio ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==6) {
                document.getElementById('dlgsoc').textContent = `venerdì ${dataSelezionata.getDate()} lulglio ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==7) {
                document.getElementById('dlgsoc').textContent = `sabato ${dataSelezionata.getDate()} luglio ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }        }
        if (Math.floor(dataSelezionata.getMonth()+1)==8) {
            if (Math.floor(dataSelezionata.getDay()+1)==1) {
                document.getElementById('dlgsoc').textContent = `domenica ${dataSelezionata.getDate()} agosto ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==2) {
                document.getElementById('dlgsoc').textContent = `lunedì ${dataSelezionata.getDate()} agosto ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==3) {
                document.getElementById('dlgsoc').textContent = `martedì ${dataSelezionata.getDate()} agosto ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==4) {
                document.getElementById('dlgsoc').textContent = `mercoledì ${dataSelezionata.getDate()} agosto ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==5) {
                document.getElementById('dlgsoc').textContent = `giovedì ${dataSelezionata.getDate()} agosto ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==6) {
                document.getElementById('dlgsoc').textContent = `venerdì ${dataSelezionata.getDate()} agosto ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==7) {
                document.getElementById('dlgsoc').textContent = `sabato ${dataSelezionata.getDate()} agosto ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }        }
        if (Math.floor(dataSelezionata.getMonth()+1)==9) {
            if (Math.floor(dataSelezionata.getDay()+1)==1) {
                document.getElementById('dlgsoc').textContent = `domenica ${dataSelezionata.getDate()} settembre ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==2) {
                document.getElementById('dlgsoc').textContent = `lunedì ${dataSelezionata.getDate()} settembre ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==3) {
                document.getElementById('dlgsoc').textContent = `martedì ${dataSelezionata.getDate()} settembre ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==4) {
                document.getElementById('dlgsoc').textContent = `mercoledì ${dataSelezionata.getDate()} settembre ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==5) {
                document.getElementById('dlgsoc').textContent = `giovedì ${dataSelezionata.getDate()} settembre ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==6) {
                document.getElementById('dlgsoc').textContent = `venerdì ${dataSelezionata.getDate()} settembre ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==7) {
                document.getElementById('dlgsoc').textContent = `sabato ${dataSelezionata.getDate()} settembre ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }        }
        if (Math.floor(dataSelezionata.getMonth()+1)==10) {
            if (Math.floor(dataSelezionata.getDay()+1)==1) {
                document.getElementById('dlgsoc').textContent = `domenica ${dataSelezionata.getDate()} ottobre ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==2) {
                document.getElementById('dlgsoc').textContent = `lunedì ${dataSelezionata.getDate()} ottobre ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==3) {
                document.getElementById('dlgsoc').textContent = `martedì ${dataSelezionata.getDate()} ottobre ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==4) {
                document.getElementById('dlgsoc').textContent = `mercoledì ${dataSelezionata.getDate()} ottobre ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==5) {
                document.getElementById('dlgsoc').textContent = `giovedì ${dataSelezionata.getDate()} ottobre ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==6) {
                document.getElementById('dlgsoc').textContent = `venerdì ${dataSelezionata.getDate()} ottobre ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==7) {
                document.getElementById('dlgsoc').textContent = `sabato ${dataSelezionata.getDate()} ottobre ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }        }
        if (Math.floor(dataSelezionata.getMonth()+1)==11) {
            if (Math.floor(dataSelezionata.getDay()+1)==1) {
                document.getElementById('dlgsoc').textContent = `domenica ${dataSelezionata.getDate()} novembre ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==2) {
                document.getElementById('dlgsoc').textContent = `lunedì ${dataSelezionata.getDate()} novembre ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==3) {
                document.getElementById('dlgsoc').textContent = `martedì ${dataSelezionata.getDate()} novembre ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==4) {
                document.getElementById('dlgsoc').textContent = `mercoledì ${dataSelezionata.getDate()} novembre ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==5) {
                document.getElementById('dlgsoc').textContent = `giovedì ${dataSelezionata.getDate()} novembre ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==6) {
                document.getElementById('dlgsoc').textContent = `venerdì ${dataSelezionata.getDate()} novembre ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==7) {
                document.getElementById('dlgsoc').textContent = `sabato ${dataSelezionata.getDate()} novembre ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }        }
        if (Math.floor(dataSelezionata.getMonth()+1)==12) {
            if (Math.floor(dataSelezionata.getDay()+1)==1) {
                document.getElementById('dlgsoc').textContent = `domenica ${dataSelezionata.getDate()} dicembre ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==2) {
                document.getElementById('dlgsoc').textContent = `lunedì ${dataSelezionata.getDate()} dicembre ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==3) {
                document.getElementById('dlgsoc').textContent = `martedì ${dataSelezionata.getDate()} dicembre ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==4) {
                document.getElementById('dlgsoc').textContent = `mercoledì ${dataSelezionata.getDate()} dicembre ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==5) {
                document.getElementById('dlgsoc').textContent = `giovedì ${dataSelezionata.getDate()} dicembre ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==6) {
                document.getElementById('dlgsoc').textContent = `venerdì ${dataSelezionata.getDate()} dicembre ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }
            if (Math.floor(dataSelezionata.getDay()+1)==7) {
                document.getElementById('dlgsoc').textContent = `sabato ${dataSelezionata.getDate()} dicembre ${dataSelezionata.getFullYear()} ${dataSelezionata.getHours()}:${dataSelezionata.getMinutes()}`;
            }        }
    }
}

function coc() {
    const dataora = document.getElementById('dataOraInput');

    if (!dataora.value) {
        erroreModal.showModal();
    } else {
        const dataSelezionata = new Date(dataora.value);
        const timestamp = Math.floor(dataSelezionata.getTime() / 1000);
        navigator.clipboard.writeText(`<t:${timestamp}:t>`).then(() => {
            copiatoModal.showModal();
        }).catch(err => {
            alert('Errore: ' + err);
        });
    }
}

function col() {
    const dataora = document.getElementById('dataOraInput');

    if (!dataora.value) {
        erroreModal.showModal();
    } else {
        const dataSelezionata = new Date(dataora.value);
        const timestamp = Math.floor(dataSelezionata.getTime() / 1000);
        navigator.clipboard.writeText(`<t:${timestamp}:T>`).then(() => {
            copiatoModal.showModal();
        }).catch(err => {
            alert('Errore: ' + err);
        });
    }
}

function cdc() {
    const dataora = document.getElementById('dataOraInput');

    if (!dataora.value) {
        erroreModal.showModal();
    } else {
        const dataSelezionata = new Date(dataora.value);
        const timestamp = Math.floor(dataSelezionata.getTime() / 1000);
        navigator.clipboard.writeText(`<t:${timestamp}:d>`).then(() => {
            copiatoModal.showModal();
        }).catch(err => {
            alert('Errore: ' + err);
        });
    }
}

function cdl() {
    const dataora = document.getElementById('dataOraInput');

    if (!dataora.value) {
        erroreModal.showModal();
    } else {
        const dataSelezionata = new Date(dataora.value);
        const timestamp = Math.floor(dataSelezionata.getTime() / 1000);
        navigator.clipboard.writeText(`<t:${timestamp}:D>`).then(() => {
            copiatoModal.showModal();
        }).catch(err => {
            alert('Errore: ' + err);
        });
    }
}

function cdloc() {
    const dataora = document.getElementById('dataOraInput');

    if (!dataora.value) {
        erroreModal.showModal();
    } else {
        const dataSelezionata = new Date(dataora.value);
        const timestamp = Math.floor(dataSelezionata.getTime() / 1000);
        navigator.clipboard.writeText(`<t:${timestamp}:f>`).then(() => {
            copiatoModal.showModal();
        }).catch(err => {
            alert('Errore: ' + err);
        });
    }
}

function cdlgsoc() {
    const dataora = document.getElementById('dataOraInput');

    if (!dataora.value) {
        erroreModal.showModal();
    } else {
        const dataSelezionata = new Date(dataora.value);
        const timestamp = Math.floor(dataSelezionata.getTime() / 1000);
        navigator.clipboard.writeText(`<t:${timestamp}:F>`).then(() => {
            copiatoModal.showModal();
        }).catch(err => {
            alert('Errore: ' + err);
        });
    }
}

function crel() {
    const dataora = document.getElementById('dataOraInput');

    if (!dataora.value) {
        erroreModal.showModal();
    } else {
        const dataSelezionata = new Date(dataora.value);
        const timestamp = Math.floor(dataSelezionata.getTime() / 1000);
        navigator.clipboard.writeText(`<t:${timestamp}:R>`).then(() => {
            copiatoModal.showModal();
        }).catch(err => {
            alert('Errore: ' + err);
        });
    }
}