import UIKit
import WebKit

class ViewController: UIViewController, WKNavigationDelegate {

    var webView: WKWebView!

    override func loadView() {
        webView = WKWebView()
        webView.navigationDelegate = self
        view = webView
    }

    override func viewDidLoad() {
        super.viewDidLoad()

        // Load the URL
        let url = URL(string: "https://jackharmer94.github.io")!
        webView.load(URLRequest(url: url))

        // Disable navigation gestures
        webView.allowsBackForwardNavigationGestures = false
    }

    // Prevent navigation away from the website
    func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction, decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
        if navigationAction.navigationType == .linkActivated {
            // Block navigation away from the website
            decisionHandler(.cancel)
        } else {
            decisionHandler(.allow)
        }
    }
}