#include <answersolver.h>
#include <SmartlookAnalytics.h>

// ...

folly::dynamic MainApplicationModuleProvider::getModule(
    const std::string &name,
    const folly::dynamic &params) {
  // auto module = samplelibrary_ModuleProvider(name, params);
  // if (module != nullptr) {
  //    return module;
  // }

  auto module = SmartlookAnalytics_ModuleProvider(name, params);
  if (module != nullptr) {
    return module;
  }

  return rncore_ModuleProvider(name, params);
}
