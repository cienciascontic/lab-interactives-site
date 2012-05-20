var models_library = models_library || {};
models_library.heat_storage = {
  "model": {
    "timestep": 500.0,
    "measurement_interval": 100,
    "viewupdate_interval": 20,
    "sunny": true,
    "sun_angle": 1.5707964,
    "solar_power_density": 1000000.0,
    "solar_ray_count": 49,
    "solar_ray_speed": 2.0E-4,
    "photon_emission_interval": 1,
    "z_heat_diffusivity": 0.0,
    "convective": false,
    "background_conductivity": 1.0,
    "background_viscosity": 1.568E-4,
    "thermal_buoyancy": 2.5E-4,
    "buoyancy_approximation": 1,
    "boundary": {
      "temperature_at_border": {
        "upper": 0.0,
        "lower": 0.0,
        "left": 0.0,
        "right": 0.0
      }
    },
    "structure": {
      "part": [
        {
          "ellipse": {
            "x": 2.5,
            "y": 5.0,
            "a": 4.0,
            "b": 4.0
          },
          "thermal_conductivity": 10.0,
          "specific_heat": 1300.0,
          "density": 1000.0,
          "transmission": 0.0,
          "reflection": 0.0,
          "absorption": 1.0,
          "emissivity": 0.0,
          "temperature": 0.0,
          "constant_temperature": false,
          "texture": {
            "texture_fg": -0x1,
            "texture_bg": -0x7f7f80,
            "texture_style": 9,
            "texture_width": 12,
            "texture_height": 12
          }
        },
        {
          "ellipse": {
            "x": 7.5,
            "y": 5.0,
            "a": 4.0,
            "b": 4.0
          },
          "thermal_conductivity": 10.0,
          "specific_heat": 1300.0,
          "density": 10.0,
          "transmission": 0.0,
          "reflection": 0.0,
          "absorption": 1.0,
          "emissivity": 0.0,
          "temperature": 0.0,
          "constant_temperature": false,
          "texture": {
            "texture_fg": -0x1,
            "texture_bg": -0x7f7f80,
            "texture_style": 10,
            "texture_width": 12,
            "texture_height": 12
          }
        },
        {
          "rectangle": {
            "x": 4.8,
            "y": 0.0,
            "width": 0.4,
            "height": 10.0
          },
          "thermal_conductivity": 1.0E-10,
          "specific_heat": 1300.0,
          "density": 25.0,
          "transmission": 0.0,
          "reflection": 0.0,
          "absorption": 1.0,
          "emissivity": 0.0,
          "temperature": 0.0,
          "constant_temperature": false,
          "texture": {
            "texture_fg": -0x1000000,
            "texture_bg": -0x1,
            "texture_style": 5,
            "texture_width": 12,
            "texture_height": 12
          }
        }
      ]
    }
  },
  "sensor": {
    "thermometer": [
      {
        "x": 2.625,
        "y": 5.25
      },
      {
        "x": 7.625,
        "y": 5.25
      }
    ]
  },
  "view": {
    "grid_size": 10,
    "color_palette_type": 1,
    "color_palette_x": 0.0,
    "color_palette_y": 0.0,
    "color_palette_w": 0.0,
    "color_palette_h": 0.0,
    "minimum_temperature": 0.0,
    "maximum_temperature": 50.0,
    "clock": false,
    "text": [
      {
        "string": "Large thermal mass",
        "name": "Arial",
        "size": 14,
        "style": 0,
        "color": 0xffffff,
        "x": 40.0,
        "y": 320.0
      },
      {
        "string": "Small thermal mass",
        "name": "Arial",
        "size": 14,
        "style": 0,
        "color": 0xffffff,
        "x": 240.0,
        "y": 320.0
      }
    ]
  }
};