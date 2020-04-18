import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

import "./index.css";

const Map = props => {
  const mapRef = useRef();

  const { center, zoom } = props;

  useEffect(() => {
    new window.ol.Map({
      target: mapRef.current.id,
      layers: [
        new window.ol.layer.Tile({
          source: new window.ol.source.OSM()
        })
      ],
      view: new window.ol.View({
        center: window.ol.proj.fromLonLat([center.lng, center.lat]),
        zoom: zoom
      })
    });
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
      id="map"
    />
  );
};

Map.propTypes = {
  center: PropTypes.objectOf(PropTypes.number).isRequired,
  zoom: PropTypes.number.isRequired,
  className: PropTypes.string,
  style: PropTypes.string
};

export default Map;
