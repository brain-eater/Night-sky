(ns first.core
  (:require [quil.core :as   q
             :include-macros true]
            [quil.middleware :as m]))

(def moon-pos {:x 50 :y 50})

(def sketch-size [500 500])

(def image-url
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Full_Moon_Luc_Viatour.jpg/1187px-Full_Moon_Luc_Viatour.jpg")

(defn get-random-non-moon-pos []
  (loop [x (rand-nth (range 0 (first sketch-size) 50))
         y (rand-nth (range 0 (second sketch-size) 50))]
    (if (and (< x 160) (< y 160))
      (recur (rand-nth (range 0 500 50))
        (rand-nth (range 0 500 50)))
      [x y])))

(defn get-random-star [x]
  (let [pos (get-random-non-moon-pos)]
    {:x    (first pos)
     :y    (second pos)
     :size (rand-nth (range 2 3))}))

(defn glow-star [star]
  {:star             star
   :line-size        0.1
   :reached-max-size false})

(defn setup []
  (q/frame-rate 40)
  (q/fill 240 240 240)
  (let [stars (map get-random-star (range 50))]
    {:moon                 {:img (q/load-image image-url)
                            :pos moon-pos}
     :stars                stars
     :next-glow-stars-info (map glow-star (take 20 stars))}))


(defn next-glow-star-info [glow-star-info stars]
  (let [{x    :x
         y    :y
         size :size} (:star glow-star-info)
        {line-size :line-size} glow-star-info]
    (cond
      (< line-size 0)                               {:star             (rand-nth stars)
                                                     :line-size        0.1
                                                     :reached-max-size false}
      (< (* 2.5 size) (:line-size glow-star-info))  {:star             {:x    x
                                                                        :y    y
                                                                        :size size}
                                                     :line-size        (- line-size 0.5)
                                                     :reached-max-size true}
      (false? (:reached-max-size glow-star-info))   {:star             {:x    x
                                                                        :y    y
                                                                        :size size}
                                                     :line-size        (+ 0.5 line-size)
                                                     :reached-max-size false}
      :else                                         {:star             {:x    x
                                                                        :y    y
                                                                        :size size}
                                                     :line-size        (- line-size 0.5)
                                                     :reached-max-size true})))

(defn update-state [state]
  {:moon                 (:moon state)
   :stars                (:stars state)
   :next-glow-stars-info (map #(next-glow-star-info % (:stars state)) (:next-glow-stars-info state))})


(defn draw-glow-circle [x y size]
  (doseq [size-inc (reverse (range 0 30 1))]
    (let [color (- 220 (* 14 (quot size-inc 2)))]
      (q/fill color color color)
      (q/stroke color color color)
      (q/ellipse x y
                 (+ size size-inc)
                 (+ size size-inc)))))

(defn draw-glow-star [glow-star-info]
  (let [{star      :star
         line-size :line-size} glow-star-info]
    (let [x             (:x star)
          y             (:y star)
          size          (:size star)
          x-change      (+ 2 (quot line-size 1.6))
          max-line-size (+ size line-size)]
      (q/fill 100 100 100)
      (q/stroke 10 10 10)
      (draw-glow-circle x y size)
      (q/stroke 200 200 200)
      (q/line (- x x-change) (- y max-line-size) (+ x x-change) (+ y max-line-size))
      (q/line (+ x x-change) (- y max-line-size) (- x x-change) (+ y max-line-size)))))

(defn draw-star [star]
  (let [{x             :x
         y             :y
         max-line-size :size} star]
    (q/stroke 200 200 200)
    (q/line (- x 2) (- y max-line-size) (+ x 2) (+ y max-line-size))
    (q/line (+ x 2) (- y max-line-size) (- x 2) (+ y max-line-size)))

  (q/ellipse
   (:x star)
   (:y star)
   (:size star)
   (:size star)))

(defn draw-state [state]
  (q/background 10)
  (q/smooth 10)
  (q/stroke 240 240 240)
  (doseq [star (:stars state)]
    (draw-star star))
  (doseq [glow-star (:next-glow-stars-info state)]
    (draw-glow-star glow-star))
  (let [moon (:moon state)]
    (when (q/loaded? (:img moon))
      (q/image (:img moon) (:x (:pos moon)) (:y (:pos moon)) 100 100))))

; this function is called in index.html
(defn ^:export run-sketch []
  (q/defsketch first
    :host "first"
    :size [500 500]
    :setup setup
    ; update-state is called on each iteration before draw-state.
    :update update-state
    :draw draw-state
    :middleware [m/fun-mode]))

; uncomment this line to reset the sketch:
; (run-sketch)
