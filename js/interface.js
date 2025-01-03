﻿$(function () {
    // ----- Event handlers -----
    // --- Netcoupe Flight
    $('#btn-get-flight').on('click',
        function () {
            flightId = $('#lbl-flight-id').val();
            console.log("Loading Netcoupe flight#" + flightId);
            loadFlight(flightId);
        });

    // --- Show / hide airspace ---
    $('#switch-airspace').on('change',
    function () {
        var show = $('#switch-airspace').is(':checked');
        isAirspaceShown = show;
        showHideAirspace(isAirspaceShown);
    });

    // --- Extra features: show infringed airspace only ---
    $('#chk-show-infringed-only').on('change', function () {
        var isChecked = $('#chk-show-infringed-only').is(':checked');
        // Show infringed airspace only
        if (isChecked) {
            $('#switch-airspace').prop( "checked", false ); // Uncheck show airspace
            $('#switch-airspace').trigger('change');

            $('#switch-navigator').prop('checked', true);

            isShowInfringedAirspaceOnly = true;
        }
        else {
            isShowInfringedAirspaceOnly = false;
        }
    });


    // ----- Button and panels interface = pure UI -----
    // Date 
    $('#up-down-arrow').on('click', function () {
        $('#reducible').toggleClass('d-none');
        $(this).toggleClass('up-arrow down-arrow');
    })

    // Flight
    $('#flight-button').on('click', function () {
        $('#flight-container').removeClass('d-none');
        $(this).addClass('d-none');
    });

    $('#flight-container img.left-arrow').on('click', function () {
        $('#flight-container').addClass('d-none');
        $('#flight-button').removeClass('d-none');
    });

    // Vario
    $('#vario-button').on('click', function () {
        $('#vario-container').removeClass('d-none');
        $(this).addClass('d-none');
    });

    $('#vario-container img.left-arrow').on('click', function () {
        $('#vario-container').addClass('d-none');
        $('#vario-button').removeClass('d-none');
    });

    // Layers
    $('#layers-button').on('click', function () {
        $('#layers-container').removeClass('d-none');
        $(this).addClass('d-none');
    });

    $('#layers-container img.left-arrow').on('click', function () {
        $('#layers-container').addClass('d-none');
        $('#layers-button').removeClass('d-none');
    });

    // Extra Features
    $('#xtra-features-button').on('click', function () {
        $('#xtra-features-container').removeClass('d-none');
        $(this).addClass('d-none');
    });

    $('#xtra-features-container img.left-arrow').on('click', function () {
        $('#xtra-features-container').addClass('d-none');
        $('#xtra-features-button').removeClass('d-none');
    });
    
    // Timeline
    $('#timeline-button').on('click', function () {
        $('#flight-timeline .map-overlay-inner').removeClass('d-none');
        $(this).addClass('d-none');
    });

    $('#commands img.left-arrow').on('click',
        function() {
            $('#flight-timeline .map-overlay-inner').addClass('d-none');
            $('#timeline-button').removeClass('d-none');
        });

    // Destroy the timeline
    $('#commands img.cross').on('click',
        function() {
            $('#flight-timeline').addClass('d-none');
            deleteIconAndTimeline();
        });
});

function showMapSpinner(show, message) {
    $('#map-spinner-text').html((message)? message : "Loading ...");

    if (show)
        $('#map-spinner').removeClass('d-none');	// Show spinner

    else
        $('#map-spinner').addClass('d-none');	// Hide spinner
}
